import {
  AppBar as MuiAppBar,
  Button as MuiButton,
} from 'material-ui'
import * as React from 'react'
import AppMenu from '../components/app/Menu'
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Toolbar,
} from '../components/mui'

export default class MUI extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      anchorEl: null,
      showModal: false,
    }
  }

  public openMenu(event: any) {
    this.setState({ anchorEl: event.currentTarget })
  }

  public closeMenu() {
    this.setState({ anchorEl: null })
  }

  public renderModal() {
    return (
      <Modal
        id="Modal"
        disableAutoFocus
        open={this.state.showModal}
        onClose={() => this.setState({ showModal: false })}
        innerStyle={{
          maxWidth: '300px',
        }}
      >
        <ModalHeader id="ModalHeader">
          <div>
            <Button
              onClick={() => this.setState({ showModal: false })}
            >
              Cancel
            </Button>
          </div>
        </ModalHeader>
        <ModalContent id="ModalContent">
          <div style={{
            height: '800px',
            maxWidth: '600px',
            outline: 'none',
            width: '600px',
          }}>test</div>
        </ModalContent>
        <ModalFooter id="ModalFooter">123</ModalFooter>
      </Modal>
    )
  }

  public render() {
    const {
      anchorEl,
      showModal,
    } = this.state

    return (
      <div style={{ paddingTop: '30px' }}>
        <h1>MUI Page</h1>
        <AppMenu />
        <h3>Hint: These are just some custom examples, and more implementations depend on your creativity.</h3>
        <h3>AppBar/Toolbar/Button/Menu/MenuItem:</h3>
        <div>
          <span>On the top ↑</span>
          <AppBar position="absolute">
            <Toolbar style={{background: '#ccc'}}>
              <span>AppBar</span>
              <MuiButton
                aria-owns={anchorEl ? 'menu-demo' : null}
                aria-haspopup="true"
                onClick={(e: any) => this.openMenu(e)}
              >
                Open Menu
              </MuiButton>
              <Menu
                id="menu-demo"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => this.closeMenu()}
              >
                <MenuItem id="MuiMenuItem1" onClick={() => this.closeMenu()}>Profile</MenuItem>
                <MenuItem id="MuiMenuItem2" onClick={() => this.closeMenu()}>My account</MenuItem>
                <MenuItem id="MuiMenuItem3" onClick={() => this.closeMenu()}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </div>
        <h3>Modal:</h3>
        <Button onClick={() => this.setState({ showModal: true })}>Open Modal</Button>
        {showModal ? this.renderModal() : null}
      </div>
    )
  }
}
