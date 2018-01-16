import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as TransitionGroup from 'react-transition-group/TransitionGroup'
import Ripple from './Ripple'

const DURATION = 550
export const DELAY_RIPPLE = 80

class TouchRipple extends React.Component<any, any> {

  public startTimer: any
  public startTimerCommit: any
  public ignoringMouseDown = false

  public state = {
    nextKey: 0,
    ripples: ([] as any),
  }

  public componentWillUnmount() {
    clearTimeout(this.startTimer)
  }

  public pulsate() {
    this.startTimer({}, { pulsate: true })
  }

  public start(event: any = {}, options: any = {}, cb: any) {
    const {
      pulsate = false,
      center = this.props.center || options.pulsate,
      fakeElement = false, // For test purposes
    } = options

    if (event.type === 'mousedown' && this.ignoringMouseDown) {
      this.ignoringMouseDown = false
      return
    }

    if (event.type === 'touchstart') {
      this.ignoringMouseDown = true
    }

    const element = fakeElement ? null : ReactDOM.findDOMNode(this)
    const rect = element
      ? element.getBoundingClientRect()
      : {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        }

    // Get the size of the ripple
    let rippleX: number
    let rippleY: number
    let rippleSize: number

    if (
      center ||
      (event.clientX === 0 && event.clientY === 0) ||
      (!event.clientX && !event.touches)
    ) {
      rippleX = Math.round(rect.width / 2)
      rippleY = Math.round(rect.height / 2)
    } else {
      const clientX = event.clientX ? event.clientX : event.touches[0].clientX
      const clientY = event.clientY ? event.clientY : event.touches[0].clientY
      rippleX = Math.round(clientX - rect.left)
      rippleY = Math.round(clientY - rect.top)
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3)

      // For some reason the animation is broken on Mobile Chrome if the size if even.
      if (rippleSize % 2 === 0) {
        rippleSize += 1
      }
    } else {
      const sizeX =
        Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2
      const sizeY =
        Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2))
    }

    // Touche devices
    if (event.touches) {
      // Prepare the ripple effect.
      this.startTimerCommit = () => {
        this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb })
      }
      // Deplay the execution of the ripple effect.
      this.startTimer = setTimeout(() => {
        this.startTimerCommit()
        this.startTimerCommit = null
      }, DELAY_RIPPLE) // We have to make a tradeoff with this value.
    } else {
      this.startCommit({ pulsate, rippleX, rippleY, rippleSize, cb })
    }
  }

  public startCommit(params: any) {
    const { pulsate, rippleX, rippleY, rippleSize, cb } = params
    let ripples = this.state.ripples

    // Add a ripple to the ripples array.
    ripples = [
      ...ripples,
      <Ripple
        key={this.state.nextKey}
        classes={this.props.classes}
        timeout={{
          exit: DURATION,
          enter: DURATION,
        }}
        pulsate={pulsate}
        rippleX={rippleX}
        rippleY={rippleY}
        rippleSize={rippleSize}
      />,
    ]

    this.setState(
      {
        nextKey: this.state.nextKey + 1,
        ripples,
      },
      cb,
    )
  }

  public stop(event: any, cb: any) {
    clearTimeout(this.startTimer)
    const { ripples } = this.state

    // The touch interaction occures to quickly.
    // We still want to show ripple effect.
    if (event.type === 'touchend' && this.startTimerCommit) {
      event.persist()
      this.startTimerCommit()
      this.startTimerCommit = null
      this.startTimer = setTimeout(() => {
        this.stop(event, cb)
      }, 0)
      return
    }

    this.startTimerCommit = null

    if (ripples && ripples.length) {
      this.setState(
        {
          ripples: ripples.slice(1),
        },
        cb,
      )
    }
  }

  public render() {
    const {
      center,
      ...other,
    } = this.props

    return (
      <TransitionGroup
        component="span"
        enter
        exit
        {...other}
      >
        {this.state.ripples}
      </TransitionGroup>
    )
  }
}
