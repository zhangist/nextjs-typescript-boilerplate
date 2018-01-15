import * as withRedux from 'next-redux-wrapper'
import Link from 'next/link'
import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import actions from '../actions'
import Menu from '../components/app/Menu'
import store from '../store'

class Redux extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public addCount() {
    this.props.updateAppData({ count: this.props.appData.count + 1 })
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
        <button onClick={() => this.addCount()}>AddCount</button>
      </div>
    )
  }
}

const mapStateToProps = (state: any, props: any) => {
  return {
    appData: state.appData,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateAppData: bindActionCreators(actions.updateAppData, dispatch),
  }
}

export default withRedux(store, mapStateToProps, mapDispatchToProps)(Redux)
