import * as React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

/**
 * mui AppBar
 */

interface Props {
  children: any,
  position?: 'static'|'fixed'|'absolute',
  style?: any,
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  ${(props: Props) => props.position === 'absolute' ? `
    top: 0;
    left: auto;
    right: 0;
    position: absolute;
  ` : ``}
  ${(props: Props) => props.position === 'static' ? `
    position: static;
    flex-shrink: 0;
  ` : ``}
  ${(props: Props) => props.position === 'fixed' || !props.position ? `
    top: 0;
    left: auto;
    right: 0;
    position: fixed;
  ` : ``}
`

const AppBar = (props: Props) => (
  <Wrapper style={props.style}>
    {props.children}
  </Wrapper>
)

export default AppBar
