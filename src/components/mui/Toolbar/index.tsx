import * as React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

/**
 * extend from Mui.Toolbar
 */

const Wrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 56px;
  align-items: center;
`

const Toolbar = ({ children, ...other }: React.HTMLAttributes<any>) => (
  <Wrapper {...other}>
    {children}
  </Wrapper>
)

export default Toolbar
