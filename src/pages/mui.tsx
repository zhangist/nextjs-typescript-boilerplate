import * as MuiButton from 'material-ui'
import * as React from 'react'
import Menu from '../components/app/Menu'
import {
  AppBar,
  Button,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
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
              id="ModalHeaderButton"
              color="inherit"
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
        <Menu />
        <h3>Hint: These are just some custom examples, and more implementations depend on your creativity.</h3>
        <h3>AppBar/Toolbar/Button/Menu/MenuItem:</h3>
        <div>
          <span>On the top ↑</span>
          {/* <AppBar id="AppBar">
            <Toolbar id="Toolbar" style={{background: '#ccc'}}>
              <span>AppBar</span>
              <Button
                id="Button1"
                aria-owns={anchorEl ? 'menu-demo' : null}
                aria-haspopup="true"
                onClick={(e: any) => this.openMenu(e)}
              >
                Open Menu
              </Button>
              <MuiMenu
                id="menu-demo"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => this.closeMenu()}
              >
                <MuiMenuItem id="MuiMenuItem1" onClick={() => this.closeMenu()}>Profile</MuiMenuItem>
                <MuiMenuItem id="MuiMenuItem2" onClick={() => this.closeMenu()}>My account</MuiMenuItem>
                <MuiMenuItem id="MuiMenuItem3" onClick={() => this.closeMenu()}>Logout</MuiMenuItem>
              </MuiMenu>
            </Toolbar>
          </AppBar> */}
        </div>
        <h3>Modal:</h3>
        {/* <Button id="Button2"  onClick={() => this.setState({ showModal: true })}>Open Modal</Button> */}
        {showModal ? this.renderModal() : null}
      </div>
    )
  }
}
