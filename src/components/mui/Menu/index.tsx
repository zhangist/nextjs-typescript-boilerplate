import MuiMenu, { MenuItem as MuiMenuItem } from 'material-ui/Menu'
import withStyles from 'material-ui/styles/withStyles'
import * as React from 'react'
import options from '../../options'

const theme = options.theme

/**
 * extend from Mui.Menu
 */
const Menu = withStyles({
  paper: {},
})((props: any) => {
  return (
    <MuiMenu {...props} classes={{
      paper: props.classes.paper,
    }} />
  )
})

/**
 * extend from Mui.MenuItem
 */
const MenuItem = withStyles({
  root: {},
})((props: any) => {
  return (
    <MuiMenuItem {...props} classes={{
      root: props.classes.root,
    }} />
  )
})

export { Menu as default, MenuItem }
