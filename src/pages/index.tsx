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
    <div className="dark:bg-gray-800">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="dark:bg-gray-900">
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
            This month I'm <b className="text-red-800">surfing</b>.
          </p>
        </section>

        <SocialBanner className="mb-8" />

        <section>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
            {resources.map((resource) => (
              <CardRow resource={resource} />
            ))}
          </div>

          <footer className="flex justify-end px-4 py-3 text-lg text-gray-700 hover:text-red-700">
            <Link href="blog"> See all articles </Link>
          </footer>
        </section>
      </main>
    </div>
  )
}

function sample(array: Array<any>) {
  return array[Math.floor(Math.random() * array.length)]
}
