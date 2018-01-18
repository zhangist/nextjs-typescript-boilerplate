import * as React from 'react'
import { findDOMNode } from 'react-dom'
import injectSheet from 'react-jss'
import styled from 'styled-components'
import theme from '../../theme'

/**
 * mui Button
 */

interface Props {
  classes: any,
  mini?: boolean,
  centerRipple?: boolean,
  component?: React.ReactType<Button>,
  disableRipple?: boolean,
  focusRipple?: boolean,
  keyboardFocusedClassName?: string,
  onKeyboardFocus?: React.FocusEventHandler<any>,
  rootRef?: React.Ref<any>,
}

const styles = {
  root: {
    color: 'rgba(0, 0, 0, 0.87)',
    padding: '8px 16px',
    borderRadius: 0,
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
  },
}

const ButtonWrapper = styled.button`
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

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.16);
  }
`
const LinkWrapper = ButtonWrapper.withComponent('a')

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
      classes,
      centerRipple,
      children,
      component,
      disableRipple,
      disabled,
      type,
      ...other,
    } = this.props

    const buttonProps: any = {}

    let Wrapper: string = 'button'

    if (!component) {
      if (other.href) {
        Wrapper = 'a'
      }
    }

    if (component === 'button') {
      Wrapper = 'button'
      buttonProps.type = type || 'button'
    }

    if (component !== 'a') {
      buttonProps.role = buttonProps.role || 'button'
      buttonProps.disabled = disabled
    }

    return (
      <Wrapper
        className={classes.root}
        onTouchStart={this.func}
        {...other}
      >
        <Label>{children}</Label>
        {!disableRipple && !disabled ? (
          <span>123</span>
        ) : null}
      </Wrapper>
    )
  }
}

export default injectSheet(styles)(Button)
