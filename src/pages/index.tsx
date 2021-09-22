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

        <section className="py-12">
          <div className="px-4 py-4 mx-auto rounded-lg bg-blue-950 max-w-7xl">
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

            <p className="px-8 py-3 bg-white rounded-lg shadow-sm font-500">
              A{' '}
              <a href="https://www.threeq.app/" target="_blank" rel="noopener">
                dashboard for standup meetings
              </a>
              , so you can see your team and everything they're working on in
              one place, and everyone knows what to discuss and nothing is
              overlooked.
            </p>
          </div>
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
