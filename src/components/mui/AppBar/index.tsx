import MuiAppBar from 'material-ui/AppBar'
import withStyles from 'material-ui/styles/withStyles'
import * as React from 'react'
import options from '../../options'

const theme = options.theme

/**
 * extend from Mui.AppBar
 */
const AppBar = withStyles({
  colorPrimary: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    color: '#333',
  },
})((props: any) => {
  return (
    <MuiAppBar {...props} classes={{
      colorPrimary: props.classes.colorPrimary,
    }} />
  )
})

export default AppBar
