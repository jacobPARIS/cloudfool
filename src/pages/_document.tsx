import * as React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/cloud-with-lightning-and-rain_26c8-fe0f.png"
          />
        </Head>
        <body className="dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
