import withStyles from 'material-ui/styles/withStyles'
import MuiToolbar from 'material-ui/Toolbar'
import * as React from 'react'
import options from '../../options'

const theme = options.theme

/**
 * extend from Mui.Toolbar
 */
const Toolbar = withStyles({
  gutters: {
    'padding-left': '0',
    'padding-right': '0',
  },
  root: {
    'min-height': '32px',
  },
})((props: any) => {
  return (
    <MuiToolbar {...props} classes={{
      gutters: props.classes.gutters,
      root: props.classes.root,
    }} />
  )
})

export default Toolbar
