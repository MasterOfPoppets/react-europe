import Document, { Head, Main, NextScript } from 'next/document'
import styled, { injectGlobal, ServerStyleSheet } from 'styled-components'

injectGlobal`
  body {
    background: papayawhip;
    margin: 0;
  }
`

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>My page</title>
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
