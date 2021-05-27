import Head from 'next/head'

import PageHeader from 'components/page-header'
import CardRow from 'components/card-row'

export default function Home({posts}: any) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="px-4 -mb-24 dark:bg-gray-900">
        <section className="px-8 py-12 mx-auto max-w-7xl ">
          <div className="mb-4">
            <h1 className="inline my-10 leading-tight text-gray-800 text-28 font-300">
              Articles
            </h1>
          </div>

          <p className="max-w-3xl mb-4 text-gray-500 text-17 dark:text-gray-100">
            I've had some things on my mind
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {posts.map((post: any) => (
            <CardRow resource={post} />
          ))}
        </section>
      </main>

      <footer className="pt-48 pb-8 text-center bg-blue-950">
        <small className="text-white"> Made with ❤️ by Jacob Paris </small>
      </footer>
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
