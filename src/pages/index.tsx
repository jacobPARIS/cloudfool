import Head from 'next/head'
import Link from 'next/link'

import SocialBanner from 'components/social-banner'
import PageHeader from 'components/page-header'
import CardRow from 'components/card-row'
import React, {SetStateAction} from 'react'
import ThemeSwitcher from 'components/theme-switcher'

const resources = [
  {
    title: 'Write a contact form in XState',
    name: 'XState Tutorial',
    path: '/blog/charting-a-contact-form-in-xstate',
    description: 'A series of statecharts representing a contact form.',
  },
  {
    title: 'Add footnotes to your content',
    name: 'HTML Tutorial',
    path: '/blog/add-footnotes-to-your-html',
    description:
      'Use HTML anchor tags to add accessible semantic footnotes to your article or webpage',
  },
  {
    title: "The developer's guide to javascript functions",
    name: 'Javascript Tutorial',
    path: '/blog/js-functions',
    description: 'An overview of functions and callbacks',
  },
]

export default function Home({greeting}) {
  const [showTheme, setShowTheme] = React.useState(false)

  return (
    <div className="flex flex-col min-vh-100">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeSwitcher show={showTheme} />
      <PageHeader>
        <button
          aria-pressed={showTheme}
          onClick={() => setShowTheme((value) => !value)}
        >
          Theme
        </button>
      </PageHeader>

      <main className="flex-grow px-4 ">
        <section className="py-8 mx-auto max-w-7xl px-42 sm:px-6">
          <div className="mt-10 mb-4">
            <span className="leading-snug text-28 font-300">{greeting}</span>

            <h1 className="leading-11 text-64 font-700">Jacob Paris</h1>
          </div>

          <p className="max-w-3xl mb-6 leading-snug tracking-tight text-28 font-300">
            I drink almond lattes while building sales funnels and b2b SaaS for
            the 🇨🇦 mortgage industry
          </p>

          <p className="max-w-3xl mb-4 font-400 text-17 dark:text-gray-100">
            When I'm not working, I'm hyperfocusing on one hobby or another.
            This month I'm <b className="text-blue-800">surfing</b>.
          </p>
        </section>

        <section className="mx-auto -mb-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
            {resources.map((resource) => (
              <CardRow resource={resource} key={resource.path} />
            ))}

            <section
              style={{zIndex: 1}}
              className="flex items-center justify-center col-span-6 px-5 py-8 bg-white rounded shadow-sm dark:sm:p-8"
            >
              <Link href="/blog">
                <a className="leading-tight hover:text-blue-600 text-28 font-300">
                  See all articles
                </a>
              </Link>
            </section>
          </div>
        </section>
      </main>
      <footer className="pt-48 pb-8 text-center bg-blue-950">
        <SocialBanner className="my-8" />

        <small className="text-white"> Made with ❤️ by Jacob Paris </small>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const greetings = ["Hi, I'm ", "Hey, I'm ", "It's ", "Hey there, I'm "]

  return {
    props: {
      greeting: sample(greetings),
    },
  }
}
function sample(array: Array<any>) {
  return array[Math.floor(Math.random() * array.length)]
}
