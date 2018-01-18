import MuiIcon from 'material-ui/Icon'
import withStyles from 'material-ui/styles/withStyles'
import * as React from 'react'
import styled, { StyledFunction } from 'styled-components'
import theme from '../../theme'

/**
 * extend from Mui.Icon
 */
const Icon = withStyles({
  root: {
    fontSize: '16px',
  },
})((props: any) => {
  return (
    <MuiIcon {...props} classes={{
      root: props.classes.root,
    }} />
  )
})

/**
 * (new) IconText
 */
interface IconTextProps {
  left?: boolean
  right?: boolean
}
const IconText = styled.span`
  font-size: 16px;
  vertical-align: top;
  ${(props: IconTextProps) => props.left ? `margin-left: 4px;` : ''}
  ${(props: IconTextProps) => props.right ? `margin-right: 4px;` : ''}
`

export { Icon as default, IconText }
