import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'

export default class MyDocument extends Document {
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
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
