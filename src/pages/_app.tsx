import '../styles/globals.scss'

import React from 'react'

import mdxComponents from 'components/mdx'
import {DefaultSeo} from 'next-seo'
import {AppProps} from 'next/app'

import {MDXProvider} from '@mdx-js/react'

import SEO from '../../next-seo.json'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}

export default MyApp
