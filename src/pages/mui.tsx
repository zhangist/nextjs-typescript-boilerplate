import * as React from 'react'
import AppMenu from '../components/app/Menu'

export default class MUI extends React.Component<any, any> {
  static async getInitialProps() {
    const text = await fetch('http://localhost:3000/api/site/hello')
      .then((response: any) => {
        return response.text()
      })
      .then((body: any) => {
        return body
      })
    return { text }
  }

  public render() {
    return (
      <div>
        <h1>MUI Page</h1>
        <AppMenu />
        <h3>Hint: These are just some custom examples, and more implementations depend on your creativity.</h3>
        <h3>Modal:</h3>
        <div>{this.props.text}</div>
      </div>
    )
  }
}