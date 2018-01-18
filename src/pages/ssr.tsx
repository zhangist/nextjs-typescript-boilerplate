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
        <h1>SSR Page</h1>
        <AppMenu />
        <h3>
          For the initial page load, getInitialProps will execute on the server only.
          getInitialProps will only be executed on the client when navigating to a
          different route via the Link component or using the routing APIs.
        </h3>
        <h3>The SSR Content:</h3>
        <div>{this.props.text}</div>
        <br />
        <div style={{ color: '#666' }}>
          👆 fetch from server api: /api/site/hello
        </div>
      </div>
    )
  }
}
