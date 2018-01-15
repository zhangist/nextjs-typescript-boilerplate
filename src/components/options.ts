const options = (global as any).OPTIONS || {}

interface Theme {
  header: {
    height: string;
  }
  content: {
    height?: string;
    top: string;
  }
  button: {
    height: string;
  }
  modal: {
    header: {
      height: string;
    },
    footer: {
      height: string;
    },
  }
}

// theme
const theme: Theme = options.theme || {}
// header
theme.header = theme.header || {}
theme.header.height = '32px'
// content
theme.content = theme.content || {}
theme.content.top = '32px'
// button
theme.button = theme.button || {}
theme.button.height = '32px'
// modal
theme.modal = theme.modal || {}
// modal header
theme.modal.header = theme.modal.header || {}
theme.modal.header.height = '32px'
// modal footer
theme.modal.footer = theme.modal.footer || {}
theme.modal.footer.height = '32px'

export default {
  theme,
}
