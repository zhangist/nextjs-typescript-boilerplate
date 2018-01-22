import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  public static getInitialProps({ renderPage }: any) {
    // styled-components Server-side rendering
    const sheet = new ServerStyleSheet()
    const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  public render() {
    const viewportContent = 'width=device-width,height=device-height,user-scalable=no,'
      + 'initial-scale=1,minimum-scale=1,maximum-scale=1'

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content={viewportContent} />
          <title>Orchestra</title>
          <link rel="stylesheet" href="http://localhost:8001/common/css/mui.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
