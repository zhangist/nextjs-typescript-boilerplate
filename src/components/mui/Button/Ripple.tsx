import * as React from 'react'
import Transition from 'react-transition-group/Transition'
import styled, { keyframes } from 'styled-components'

const muiRippleEnter = keyframes`
  from {
    transform: 'scale(0)';
  }
  to {
    transform: 'scale(1)';
  }
`
const Wrapper = styled.span`
  opacity: 1;
`

class Ripple extends React.Component<any, any> {
  public state = {
    rippleVisible: false,
    rippleLeaving: false,
  }

  public handleEnter() {
    this.setState({
      rippleVisible: true,
    })
  }

  public handleExit() {
    this.setState({
      rippleLeaving: true,
    })
  }

  public render() {
    const {
      classes,
      className: classNameProp,
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      ...other,
    } = this.props
    const { rippleVisible, rippleLeaving } = this.state

    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX,
    }

    return (
      <Transition onEnter={this.handleEnter} onExit={this.handleExit} {...other}>
        <span className={className}>
          <span className={rippleClassName} style={rippleStyles} />
        </span>
      </Transition>
    )
  }
}

export default Ripple
