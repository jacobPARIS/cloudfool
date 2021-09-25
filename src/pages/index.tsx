import React from 'react'

import CardRow from 'components/card-row'
import Tweet from 'components/mdx/tweet'
import PageHeader from 'components/page-header'
import SocialBanner from 'components/social-banner'
import SocialBannerSmall from 'components/social-banner-small'
import fs from 'fs'
import matter from 'gray-matter'
// @ts-ignore
import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'

import ThemePreview from '../components/theme-preview'
import LoverDark from '../styles/lover-theme-dark.json'

const resources = [
  {
    title: 'Animate a Stripe Checkout with Framer and React',
    name: 'Stripe',
    path: '/blog/animating-stripe-checkout-framer-react',
    description:
      'An animated stripe checkout using XState and React. This uses the Stripe API and the Stripe Elements tools to create an actual payment.',
  },
  {
    title: 'Add footnotes to your content',
    name: 'HTML',
    path: '/blog/add-footnotes-to-your-html',
    description:
      'Use HTML anchor tags to add accessible semantic footnotes to your article or webpage',
  },
  {
    title: "A tech interview that doesn't suck",
    name: 'Career',
    path: '/blog/a-tech-interview-that-doesnt-suck',
    description:
      'No other profession has so many candidates who are good at interviews and bad at the job they are interviewing for',
  },
]

export default function Home({greeting, sources}) {
  const [showTheme, setShowTheme] = React.useState(false)

  return (
    <div className="flex flex-col min-vh-100">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="flex-grow max-w-6xl mx-auto md:px-4">
        <section className="flex flex-wrap gap-8 py-8 mt-10">
          <img
            src="images/jacob.png"
            className="w-48 h-48 rounded-lg shadow"
            alt="Professional headshot"
            title="From afar this macbook is often mistaken for a graduation cap, so I get all the prestige of a CS degree while only needing to learn that anything I put on my head is a hat."
          />
          <div className="flex-grow" style={{flexBasis: '25rem'}}>
            <div className="mb-4">
              <span className="text-2xl leading-snug font-300">{greeting}</span>

              <h1 className="leading-11 text-64 font-700">Jacob Paris</h1>
            </div>
            <p className="max-w-3xl mb-6 text-2xl leading-snug tracking-tight font-300">
              I help companies save time and make money by improving the quality
              of their software
            </p>
            <SocialBannerSmall />
          </div>
        </section>

        <section
          className="py-12 bg-gray-900 bg-cover rounded-lg text-gray-50"
          style={{
            backgroundImage: 'url(/images/assets_2021-06-22-16-36-02.png)',
          }}
        >
          <div className="px-4 mx-auto max-w-7xl ">
            <Link href="/toolstache">
              <a className="text-white hover:text-yellow-500">
                <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                  ToolStache
                </h2>
              </a>
            </Link>

            <p className="mb-4 text-2xl">
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
          </div>
        </section>

        <section className="flex flex-wrap items-stretch mx-auto md:flex-nowrap sm:py-4 max-w-7xl">
          <div className="px-4 mb-4" style={{flexBasis: '30rem'}}>
            <p className="mb-8 text-2xl">
              During the winter season you can find me on the slopes every
              morning.
            </p>

            <p className="mb-8 text-2xl">
              Working for North American companies from European timezones means
              I can wake up slowly with time for coffee, food, errands, and
              sports.
            </p>

            <p className="mb-8 text-2xl">
              And then I'm focused and ready to settle into work from the early
              afternoon straight on until the evening.
            </p>
          </div>

          <div
            className="relative flex-grow px-4 mb-4 text-center"
            style={{minWidth: '20rem', minHeight: '20rem'}}
          >
            <div className="absolute inset-0 flex h-full align-items-center">
              <img
                src="/images/index_2021-07-26-14-11-48.png"
                className="max-h-full mx-auto rounded-lg shadow"
                alt="Holding a snowboard above my head on top of a snowy mountain"
              />
            </div>
          </div>
        </section>

        <section className="pt-8 bg-gray-900 rounded-lg cursor-pointer text-gray-50 group">
          <h2 className="px-4 mb-4 text-4xl font-bold md:text-6xl">
            <Link href="/themes#from-paris-with-love">VS Code Themes</Link>
          </h2>

          <div className="flex-row lg:flex">
            <div className="flex-grow max-w-lg px-4 py-3">
              <div className="">
                <div
                  style={{width: '85%', backgroundColor: 'rgb(33, 45, 99)'}}
                  className="h-4 mx-auto -mb-2 transition-transform transform group-hover:-translate-y-4 rounded-t-md"
                />
                <div
                  style={{width: '95%', backgroundColor: 'rgb(78, 87, 106)'}}
                  className="h-6 mx-auto -mb-4 transition-transform transform group-hover:-translate-y-3 rounded-t-md"
                />
                <div className="transition-transform transform group-hover:-translate-y-1">
                  <ThemePreview sources={sources.loverDark} theme={LoverDark} />
                </div>
              </div>
            </div>

            <div
              className="flex-shrink px-4 py-3 text-gray-50"
              style={{flexBasis: '40ch'}}
            >
              <p className="mb-4 text-2xl">
                I have published 3{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=jacobparis.lover"
                  target="_blank"
                  rel="noopener"
                >
                  VS Code
                </a>{' '}
                themes.
              </p>

              <p className="mb-4 text-2xl">
                If I'm working outdoors at a café, I'll use a light theme, but
                when I'm working indoors I prefer low-contrast dark themes.
              </p>

              <Tweet
                className="my-4 text-gray-800"
                text={[
                  `It's called vs code because every day you wake up and have to fight your code`,
                ]}
                tweetUrl="https://twitter.com/jacobmparis/status/1331919130556051457"
              />

              <p className="text-2xl text-right">
                <Link href="/themes">See all themes</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="my-10 overflow-hidden rounded-lg bg-gradient-to-tr from-blue-600 to-blue-500 text-gray-50">
          <svg
            width="100%"
            height="200px"
            viewBox="0 0 1280 86"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 pointer-events-none max-w-none"
          >
            <g fill="rgba(255,255,255,0.13)">
              <path
                d="M833.9 27.5c-5.8 3.2-11 7.3-15.5 12.2-7.1-6.9-17.5-8.8-26.6-5-30.6-39.2-87.3-46.1-126.5-15.5-1.4 1.1-2.8 2.2-4.1 3.4C674.4 33.4 684 48 688.8 64.3c4.7.6 9.3 1.8 13.6 3.8 7.8-24.7 34.2-38.3 58.9-30.5 14.4 4.6 25.6 15.7 30.3 30 14.2 1.2 27.7 6.9 38.5 16.2C840.6 49.6 876 29.5 910.8 38c-20.4-20.3-51.8-24.6-76.9-10.5zM384 43.9c-9 5-16.7 11.9-22.7 20.3 15.4-7.8 33.3-8.7 49.4-2.6 3.7-10.1 9.9-19.1 18.1-26-15.4-2.3-31.2.6-44.8 8.3zm560.2 13.6c2 2.2 3.9 4.5 5.7 6.9 5.6-2.6 11.6-4 17.8-4.1-7.6-2.4-15.6-3.3-23.5-2.8zM178.7 7c29-4.2 57.3 10.8 70.3 37 8.9-8.3 20.7-12.8 32.9-12.5C256.4 1.8 214.7-8.1 178.7 7zm146.5 56.3c1.5 4.5 2.4 9.2 2.5 14 .4.2.8.4 1.2.7 3.3 1.9 6.3 4.2 8.9 6.9 5.8-8.7 13.7-15.7 22.9-20.5-11.1-5.2-23.9-5.6-35.5-1.1zM33.5 54.9c21.6-14.4 50.7-8.5 65 13 .1.2.2.3.3.5 7.3-1.2 14.8-.6 21.8 1.6.6-10.3 3.5-20.4 8.6-29.4.3-.6.7-1.2 1.1-1.8-32.1-17.2-71.9-10.6-96.8 16.1zm1228.9 2.7c2.3 2.9 4.4 5.9 6.2 9.1 3.8-.5 7.6-.8 11.4-.8V48.3c-6.4 1.8-12.4 5-17.6 9.3zM1127.3 11c1.9.9 3.7 1.8 5.6 2.8 14.2 7.9 25.8 19.7 33.5 34 13.9-11.4 31.7-16.9 49.6-15.3-20.5-27.7-57.8-36.8-88.7-21.5z"
                fill-opacity=".5"
              />
              <path d="M0 0v66c6.8 0 13.5.9 20.1 2.6 3.5-5.4 8.1-10.1 13.4-13.6 24.9-26.8 64.7-33.4 96.8-16 10.5-17.4 28.2-29.1 48.3-32 36.1-15.1 77.7-5.2 103.2 24.5 19.7.4 37.1 13.1 43.4 31.8 11.5-4.5 24.4-4.2 35.6 1.1l.4-.2c15.4-21.4 41.5-32.4 67.6-28.6 25-21 62.1-18.8 84.4 5.1 6.7-6.6 16.7-8.4 25.4-4.8 29.2-37.4 83.3-44.1 120.7-14.8l1.8 1.5c37.3-32.9 94.3-29.3 127.2 8 1.2 1.3 2.3 2.7 3.4 4.1 9.1-3.8 19.5-1.9 26.6 5 24.3-26 65-27.3 91-3.1.5.5 1 .9 1.5 1.4 12.8 3.1 24.4 9.9 33.4 19.5 7.9-.5 15.9.4 23.5 2.8 7-.1 13.9 1.5 20.1 4.7 3.9-11.6 15.5-18.9 27.7-17.5.2-.3.3-.6.5-.9 22.1-39.2 70.7-54.7 111.4-35.6 30.8-15.3 68.2-6.2 88.6 21.5 18.3 1.7 35 10.8 46.5 25.1 5.2-4.3 11.1-7.4 17.6-9.3V0H0z" />
            </g>
          </svg>

          <div className="px-4 py-8">
            <a href="https://www.threeq.app/" target="_blank" rel="noopener">
              <a className="text-gray-50 hover:text-gray-200">
                <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                  3Q
                  <span className="text-3xl font-normal">
                    (three questions)
                  </span>
                </h2>
              </a>
            </a>

            <p className="mb-4 text-2xl">
              A{' '}
              <a
                href="https://www.threeq.app/"
                className="text-red-300 hover:text-white hover:underline"
                target="_blank"
                rel="noopener"
              >
                dashboard for standup meetings
              </a>
              , so you can see your team and everything they're working on in
              one place, and everyone knows what to discuss and nothing is
              overlooked.
            </p>
          </div>

          <svg
            width="100%"
            viewBox="0 0 1280 86"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-none"
          >
            <g fill="#ffffff">
              <path
                d="M1280 66.1c-3.8 0-7.6.3-11.4.8-18.3-32.6-59.6-44.2-92.2-25.9-3.5 2-6.9 4.3-10 6.9-22.7-41.7-74.9-57.2-116.6-34.5-14.2 7.7-25.9 19.3-33.8 33.3-.2.3-.3.6-.5.8-12.2-1.4-23.7 5.9-27.7 17.5-11.9-6.1-25.9-6.3-37.9-.6-21.7-30.4-64-37.5-94.4-15.7-12.1 8.6-21 21-25.4 35.2-10.8-9.3-24.3-15-38.5-16.2-8.1-24.6-34.6-38-59.2-29.9-14.3 4.7-25.5 16-30 30.3-4.3-1.9-8.9-3.2-13.6-3.8-13.6-45.5-61.5-71.4-107-57.8a86.38 86.38 0 0 0-43.2 29.4c-8.7-3.6-18.7-1.8-25.4 4.8-23.1-24.8-61.9-26.2-86.7-3.1-7.1 6.6-12.5 14.8-15.9 24-26.7-10.1-56.9-.4-72.8 23.3-2.6-2.7-5.6-5.1-8.9-6.9-.4-.2-.8-.4-1.2-.7-.6-25.9-22-46.4-47.9-45.8-11.5.3-22.5 4.7-30.9 12.5-16.5-33.5-57.1-47.3-90.6-30.8-21.9 11-36.3 32.7-37.6 57.1-7-2.3-14.5-2.8-21.8-1.6C84.8 47 55.7 40.7 34 54.8c-5.6 3.6-10.3 8.4-13.9 14-6.6-1.7-13.3-2.6-20.1-2.6-.1 0 0 19.8 0 19.8h1280V66.1z"
                fill-opacity=".5"
              />
              <path d="M15.6 86H1280V48.5c-3.6 1.1-7.1 2.5-10.4 4.4-6.3 3.6-11.8 8.5-16 14.5-8.1-1.5-16.4-.9-24.2 1.7-3.2-39-37.3-68.1-76.4-64.9-24.8 2-46.8 16.9-57.9 39.3-19.9-18.5-51-17.3-69.4 2.6-8.2 8.8-12.8 20.3-13.1 32.3-.4.2-.9.4-1.3.7-3.5 1.9-6.6 4.4-9.4 7.2-16.6-24.9-48.2-35-76.2-24.4-12.2-33.4-49.1-50.6-82.5-38.4-9.5 3.5-18.1 9.1-25 16.5-7.1-6.9-17.5-8.8-26.6-5-30.4-39.3-87-46.3-126.2-15.8-14.8 11.5-25.6 27.4-31 45.4-4.9.6-9.7 1.9-14.2 3.9-8.2-25.9-35.8-40.2-61.7-32-15 4.8-26.9 16.5-31.8 31.5-14.9 1.3-29 7.2-40.3 17-11.5-37.4-51.2-58.4-88.7-46.8-14.8 4.6-27.7 13.9-36.7 26.5-12.6-6-27.3-5.7-39.7.6-4.1-12.2-16.2-19.8-29-18.4-.2-.3-.3-.6-.5-.9-24.4-43.3-79.4-58.6-122.7-34.2-13.3 7.5-24.4 18.2-32.4 31.2C99.8 18.5 50 28.5 25.4 65.4c-4.3 6.4-7.5 13.3-9.8 20.6z" />
            </g>
          </svg>

          <div className="py-4 bg-white" />
        </section>

        <section className="py-12 ">
          <div className="px-4 mx-auto max-w-7xl">
            <Link href="/blog/html-for-beginners-01">
              <a>
                <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                  HTML for Absolute Beginners
                </h2>
              </a>
            </Link>

            <p className="mb-4 text-2xl md:text-4xl">
              An entry level guide to HTML fundamentals
            </p>

            <hr className="mb-4 opacity-20" />

            <p className="mb-4 font-500">
              In this{' '}
              <Link href="/blog/html-for-beginners-01">
                <a>7 part guide</a>
              </Link>{' '}
              you'll learn how HTML works while building a small site with
              images, links, lists, and tables.
            </p>
          </div>
        </section>

        <section className="py-3 mx-auto sm:py-4 max-w-7xl">
          <div className="grid max-w-full grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6">
            {resources.map((resource) => (
              <CardRow resource={resource} key={resource.path} />
            ))}

            <section
              style={{zIndex: 1}}
              className="flex items-center justify-center col-span-6 px-5 py-8 bg-white rounded shadow-sm dark:sm:p-8"
            >
              <Link href="/blog">
                <a className="text-2xl leading-tight hover:text-blue-600 font-300">
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

  async function renderExamples(theme) {
    const options = {
      mdxOptions: {
        rehypePlugins: [
          [
            require(`rehype-shiki`),
            {
              theme,
              useBackground: false,
            },
          ],
        ],
      },
    }

    return {
      javascript: await serialize(
        matter(
          fs
            .readFileSync(
              path.join(
                process.cwd(),
                'src',
                'pages',
                'themes',
                `javascript.mdx`,
              ),
            )
            .toString(),
        ).content,
        // @ts-ignore
        options,
      ),
      css: await serialize(
        matter(
          fs
            .readFileSync(
              path.join(process.cwd(), 'src', 'pages', 'themes', `css.mdx`),
            )
            .toString(),
        ).content,
        // @ts-ignore
        options,
      ),
      html: await serialize(
        matter(
          fs
            .readFileSync(
              path.join(process.cwd(), 'src', 'pages', 'themes', `html.mdx`),
            )
            .toString(),
        ).content,
        // @ts-ignore
        options,
      ),
    }
  }

  return {
    props: {
      greeting: sample(greetings),
      sources: {
        loverDark: await renderExamples(`./src/styles/lover-theme-dark.json`),
      },
    },
  }
}
function sample(array: Array<any>) {
  return array[Math.floor(Math.random() * array.length)]
}
