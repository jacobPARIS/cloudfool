import React from 'react'

import CardRow from 'components/card-row'
import PageHeader from 'components/page-header'
import SocialBanner from 'components/social-banner'
import ThemeSwitcher from 'components/theme-switcher'
import Head from 'next/head'
import Link from 'next/link'

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

      <main className="flex-grow">
        <section className="px-4 py-8 mx-auto max-w-7xl px-42 sm:px-6">
          <div className="mt-10 mb-4">
            <span className="leading-snug text-28 font-300">{greeting}</span>

            <h1 className="leading-11 text-64 font-700">Jacob Paris</h1>
          </div>

          <p className="max-w-3xl mb-6 leading-snug tracking-tight text-28 font-300">
            I design systems and software to help companies save time and make
            money
          </p>
        </section>

        <section
          className="px-12 py-12 bg-cover text-gray-50"
          style={{
            backgroundImage: 'url(/images/assets_2021-06-22-16-36-02.png)',
          }}
        >
          <Link href="/toolstache">
            <a className="text-white hover:text-yellow-500">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                ToolStache
              </h1>
            </a>
          </Link>

          <p className="mb-4 text-2xl md:text-4xl">
            The easiest inventory management system ever made
          </p>

          <hr className="mb-4 opacity-20" />

          <p className="mb-4 font-500">
            <Link href="/toolstache">
              <a className="text-yellow-500 hover:text-white">ToolStache</a>
            </Link>{' '}
            helps construction companies manage and track their assets to cut
            down on theft, repurchasing, and missed bill-out opportunities.
          </p>
        </section>

        <section className="px-4 mx-auto max-w-7xl">
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
