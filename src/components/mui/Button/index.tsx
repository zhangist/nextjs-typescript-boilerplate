import * as classNames from 'classnames'
import * as React from 'react'
import { findDOMNode } from 'react-dom'

/**
 * mui Button
 */

interface Props {
  mini?: boolean,
  centerRipple?: boolean,
  component?: React.ReactType<Button>,
  disableRipple?: boolean,
  focusRipple?: boolean,
  keyboardFocusedClassName?: string,
  onKeyboardFocus?: React.FocusEventHandler<any>,
  rootRef?: React.Ref<any>,
  color?: string,
}

class Button extends React.Component<Props
  & React.AnchorHTMLAttributes<HTMLElement>
  & React.ButtonHTMLAttributes<HTMLElement>, any> {

  public button: null|Element

  public state = {
    red: false,
    color: 'green',
    keyboardFocused: false,
  }

  public componentDidMount() {
    this.button = findDOMNode(this)
  }

  public componentWillUnmount() {
    this.button = null
  }

  public componentWillReceiveProps(nextProps: any) {
    if (!this.props.disabled && nextProps.disabled) {
      this.setState({
        keyboardFocused: false,
      })
    }
  }

  public func() {
    this.setState({})
  }

  public render() {
    const {
      className,
      centerRipple,
      children,
      component,
      disableRipple,
      disabled,
      color,
      type,
      ...other,
    } = this.props

    const buttonProps: any = {}

    let Root: string = 'button'

    if (!component) {
      if (other.href) {
        Root = 'a'
      }
    }

    if (component === 'button') {
      Root = 'button'
      buttonProps.type = type || 'button'
    }

    if (component !== 'a') {
      buttonProps.role = buttonProps.role || 'button'
      buttonProps.disabled = disabled
    }

    const rootClassName = classNames('Mui_Button-root', {
      'Mui_Button-root-red': this.state.red,
    })
    const labelClassName = classNames('Mui_Button-label')

    return (
      <Root
        className={rootClassName}
        onTouchStart={this.func}
        onMouseEnter={() => this.setState({ red: true })}
        onMouseLeave={() => this.setState({ red: false })}
        {...other}
      >
        <span className={labelClassName}>{children}</span>
        {!disableRipple && !disabled ? (
          <span>123</span>
        ) : null}
      </Root>
    )
  }
}

export default Button
