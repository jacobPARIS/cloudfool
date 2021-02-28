import Head from 'next/head'

import PageHeader from 'components/page-header'
import CardRow from 'components/card-row'

export default function Home({posts}: any) {
  return (
    <div className="dark:bg-gray-800">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="dark:bg-gray-900">
        <section className="py-24 mx-auto max-w-7xl px-42 sm:px-6 lg:px-16 sm:py-16">
          <div className="mb-4">
            <h1 className="inline text-4xl font-black text-gray-900 dark:text-gray-100 sm:text-6xl">
              Articles
            </h1>
          </div>

          <p className="max-w-3xl mb-4 text-2xl text-gray-800 dark:text-gray-100">
            Here's what I've been writing lately
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {posts.map((post: any) => (
            <CardRow resource={post} />
          ))}
        </section>
      </main>
    </div>
  )
}

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

const ARTICLES_PATH = path.join(process.cwd(), 'src', 'articles')
export async function getStaticProps() {
  const posts = fs
    .readdirSync(ARTICLES_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((filename) => {
      const buffer = fs.readFileSync(path.join(ARTICLES_PATH, filename))
      const page = matter(buffer.toString())

      return {
        ...page.data,
        path: `blog/${filename.slice(0, filename.indexOf('.mdx'))}`,
      }
    })

  return {
    props: {
      posts: posts,
    },
  }
}
