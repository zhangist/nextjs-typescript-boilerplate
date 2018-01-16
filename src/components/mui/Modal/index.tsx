import MuiModal from 'material-ui/Modal'
import withStyles from 'material-ui/styles/withStyles'
import * as React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

/**
 * extend from Mui.Modal
 */
const Modal = withStyles({
  root: {
    outline: 'none',
  },
})((props: any) => {
  const { innerStyle, ...rest } = props
  const style = (Object as any).assign({}, {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '600px',
    outline: 'none',
    position: 'relative',
    width: '100%',
  }, innerStyle)

  return (
    <MuiModal {...rest} classes={{
      root: props.classes.root,
    }}>
      <div style={style}>
        {props.children ? props.children : null}
      </div>
    </MuiModal>
  )
})

/**
 * (new) ModalHeader
 */
const ModalHeader = styled.div`
  flex: 0 0 ${theme.modal.header.height};
`
// (new) ModalContent
const ModalContent = styled.div`
  width: 100%;
  flex: 1 1 100%;
  overflow: auto;
  background-color: #ccc;
  position: relative;
`
/**
 * (new) ModalFooter
 */
const ModalFooter = styled.div`
  flex: 0 0 ${theme.modal.footer.height};
`

export { Modal as default, ModalHeader, ModalContent, ModalFooter }
