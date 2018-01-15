import * as withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import * as React from 'react'
import Menu from '../components/app/Menu'
import store from '../store'

class ReduxRead extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    const {
      appData,
    } = this.props

    return (
      <div>
        <h1>Redux Page</h1>
        <Menu />
        <h2>Data in redux:</h2>
        <div>title: {appData.title};</div>
        <div>count: {appData.count};</div>
      </div>
    )
  }
}

const mapStateToProps = (state: any, props: any) => {
  return {
    appData: state.appData,
  }
}

export default withRedux(store, mapStateToProps, null)(ReduxRead)
