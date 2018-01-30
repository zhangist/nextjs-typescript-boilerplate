import * as React from 'react'
import AppMenu from '../components/app/Menu'

export default class MUI extends React.Component<any, any> {
  public state = {
    openModal: false,
  }
  public render() {
    return (
      <div>
        <h1>MUI Page</h1>
        <AppMenu />
        <h3>Hint: These are just some custom examples, and more implementations depend on your creativity.</h3>
        <h3>Modal:</h3>
      </div>
    )
  }
}
