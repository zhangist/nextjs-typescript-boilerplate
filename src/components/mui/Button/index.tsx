import * as React from 'react'
import { findDOMNode } from 'react-dom'
import styled, { css } from 'styled-components'
import theme from '../../theme'

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
  red?: boolean,
}

const Root = styled.button`
  color: rgba(0, 0, 0, 0.87);
  padding: 8px 16px;
  min-width: 88px;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.4em;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  border-radius: 0;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  ${(props: Props) => props.red ? css`
    background-color: red;
  ` : ''}

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.16);
  }
`
const Red = css`
  background-color: red;
`

const Label = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`

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
      red,
      type,
      ...other,
    } = this.props

    const buttonProps: any = {}

    let Wrapper: any = Root

    if (!component) {
      if (other.href) {
        Wrapper = Root.withComponent('a')
      }
    }

    if (component === 'button') {
      Wrapper = Root.withComponent('button')
      buttonProps.type = type || 'button'
    }

    if (component !== 'a') {
      buttonProps.role = buttonProps.role || 'button'
      buttonProps.disabled = disabled
    }

    return (
      <Root
        className={className}
        onTouchStart={this.func}
        onMouseEnter={() => this.setState({ red: true })}
        onMouseLeave={() => this.setState({ red: false })}
        red={red}
        {...other}
      >
        <Label>{children}</Label>
        {!disableRipple && !disabled ? (
          <span>123</span>
        ) : null}
      </Root>
    )
  }
}

export default Button
