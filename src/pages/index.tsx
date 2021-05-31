import Head from 'next/head'
import Link from 'next/link'

import SocialBanner from 'components/social-banner'
import PageHeader from 'components/page-header'
import CardRow from 'components/card-row'

const resources = [
  {
    title: 'Write a contact form in XState',
    name: 'XState Tutorial',
    path: 'blog/charting-a-contact-form-in-xstate',
    description: 'A series of statecharts representing a contact form.',
  },
  {
    title: 'Add footnotes to your content',
    name: 'HTML Tutorial',
    path: 'blog/add-footnotes-to-your-html',
    description:
      'Use HTML anchor tags to add accessible semantic footnotes to your article or webpage',
  },
  {
    title: "The developer's guide to javascript functions",
    name: 'Javascript Tutorial',
    path: 'blog/js-functions',
    description: 'An overview of functions and callbacks',
  },
]
export default function Home() {
  const greetings = ["Hi, I'm ", "Hey, I'm ", "It's ", "Hey there, I'm "]
  const punctuation = ['!', '!!', '', '.', ' 🙏']

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-800 min-vh-100">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="flex-grow px-4 dark:bg-gray-900 ">
        <section className="py-8 mx-auto max-w-7xl px-42 sm:px-6">
          <div className="my-10">
            <span className="leading-tight text-gray-800 text-28 font-300">
              {sample(greetings)}
            </span>

            <h1 className="inline leading-tight text-gray-800 text-28 font-300">
              Jacob Paris
            </h1>

            <span className="leading-tight text-gray-800 text-28 font-300">
              {sample(punctuation)}
            </span>
          </div>

          <p className="max-w-3xl mb-4 text-gray-700 font-400 text-17 dark:text-gray-100">
            I'm a nomad from Canada 🇨🇦
          </p>

          <p className="max-w-3xl mb-4 text-gray-500 text-17 dark:text-gray-100">
            When I'm not working, I'm diving all-in on one hobby or another.
            This month I'm <b className="text-blue-800">surfing</b>.
          </p>
        </section>

        <section className="mx-auto -mb-24 max-w-7xl">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
            {resources.map((resource) => (
              <CardRow resource={resource} />
            ))}

            <section
              style={{zIndex: 1}}
              className="flex items-center justify-center col-span-6 px-5 py-8 bg-white rounded shadow-sm dark:bg-gray-800 dark:text-gray-200 sm:p-8"
            >
              <Link href="/blog">
                <a className="leading-tight hover:text-blue-600 dark:hover:text-blue-300 text-28 font-300">
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

function sample(array: Array<any>) {
  return array[Math.floor(Math.random() * array.length)]
}
