import * as React from 'react'

import mdxComponents from 'components/mdx'
import PageHeader from 'components/page-header'
import ThemeSwitcher from 'components/theme-switcher'
import fs from 'fs'
import matter from 'gray-matter'
// @ts-ignore
import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import {NextSeo} from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import path from 'path'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'

const queryClient = new QueryClient()
const ARTICLES_PATH = path.join(process.cwd(), 'src', 'articles')

function ContributionGraph({filename}) {
  const {isLoading, isError, data} = useQuery('commits', () =>
    fetch(
      `https://api.github.com/repos/JacobParis/cloudfool/commits?sha=main&path=src/articles/${filename}`,
    ).then((response) => response.json()),
  )

  if (isLoading) return <span> Loading </span>
  if (isError) return <span> error </span>

  if (!data.length) return <span> Not ready </span>
  const contributions = {}
  for (const item of data) {
    const [date] = item.commit.committer.date.split('T')
    contributions[date] = (contributions[date] || 0) + 1
  }

  const [firstWeek] = Object.keys(contributions).reverse()
  console.log({firstWeek, contributions})
  const origin = new Date(firstWeek)
  origin.setDate(origin.getDate() - origin.getDay())

  const numberOfWeeks = Math.round(
    (new Date().getTime() - new Date(firstWeek).getTime()) /
      (7 * 24 * 60 * 60 * 1000),
  )

  function renderCell(week, days) {
    const datetime = new Date(firstWeek)
    datetime.setDate(origin.getDate() + week * 7 + days)

    const [date] = datetime.toISOString().split('T')

    const count = contributions[date]

    if (count) {
      return (
        <td title={`${count} updates on ${date}`}>
          <div
            className={`w-3 h-3 bg-green-${count + 2}00 border-green-${
              count + 4
            }00 rounded border`}
          />
        </td>
      )
    }

    return (
      <td>
        <div className="w-3 h-3 bg-white border rounded" />
      </td>
    )
  }
  return (
    <table className="border-separate">
      <tbody>
        {Array(numberOfWeeks)
          .fill(0)
          .map((_, week) => {
            return (
              <tr>
                {renderCell(week, 0)}
                {renderCell(week, 1)}
                {renderCell(week, 2)}
                {renderCell(week, 3)}
                {renderCell(week, 4)}
                {renderCell(week, 5)}
                {renderCell(week, 6)}
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
export default function Blog({
  title = 'Missing title',
  description = '',
  seo = {},
  lastUpdated,
  source,
  filename,
  tags = [],
}: any) {
  const router = useRouter()
  const url = 'https://www.jacobparis.com' + router.asPath
  const canonicalUrl = seo.canonicalUrl ? seo.canonicalUrl : url

  const ogImage = seo.ogImage
    ? seo.ogImage
    : `https://og-image-eta-ivory.vercel.app/${encodeURIComponent(title)}`

  const lastUpdatedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const [showTheme, setShowTheme] = React.useState(false)
  return (
    <>
      <NextSeo
        title={title}
        description={seo.description || description}
        openGraph={{
          title: seo.ogTitle || title,
          description: seo.ogDescription || description,
          url,
          images: [
            {
              url: ogImage,
              alt: title,
            },
          ],
        }}
        twitter={{
          cardType: seo.cardType || 'summary_large_image',
          site: seo.site || 'jacobmparis',
          handle: 'jacobmparis',
        }}
        canonical={canonicalUrl}
      />

      <ThemeSwitcher show={showTheme} />
      <PageHeader>
        <button
          aria-pressed={showTheme}
          onClick={() => setShowTheme((value) => !value)}
        >
          Theme
        </button>
      </PageHeader>

      <article className="px-5 mx-auto">
        <header>
          <h1 className="w-full max-w-screen-md mt-10 mb-4">{title}</h1>
        </header>

        <small className="text-14">
          Last updated {lastUpdatedDate} by{' '}
          <a
            href="https://twitter.com/intent/follow?screen_name=jacobmparis"
            rel="noopener"
            target="twitter"
          >
            Jacob Paris
          </a>
        </small>
        <hr className="mt-2 mb-12" />

        {tags.includes('Habit') ? (
          <aside className="float-right px-4 py-2 text-center bg-gray-100 rounded">
            <p className="mx-auto mb-2 font-400">Habit tracker</p>
            <QueryClientProvider client={queryClient}>
              <ContributionGraph filename={filename} />
            </QueryClientProvider>
          </aside>
        ) : null}

        <main className="prose">
          <MDXRemote {...source} components={mdxComponents} />
        </main>

        <footer className="text-gray-500">
          <p className="mb-5">
            If you enjoyed this post, please{' '}
            <a
              href={`https://twitter.com/intent/tweet?url=${canonicalUrl}`}
              rel="noopener"
              target="twitter"
            >
              let me know on Twitter!
            </a>
          </p>

          <p className="mb-5">
            If you've found any issues or typos, feel free to{' '}
            <a
              target="edit"
              rel="noopener"
              href={`https://github.com/JacobParis/cloudfool/edit/main/src/articles/${filename}`}
            >
              request changes here!
            </a>
          </p>
        </footer>
      </article>
    </>
  )
}

function Author({name, image, path}) {
  function Profile() {
    return (
      <>
        {image && (
          <Image
            src={image.url}
            width={48}
            height={48}
            alt={name}
            className="rounded-full"
          />
        )}
        <div className="leading-tighter">
          <span className="text-xs uppercase">author</span>
          <div className="font-semibold">{name}</div>
        </div>
      </>
    )
  }

  return name ? (
    path ? (
      <Link href={path}>
        <a className="inline-flex items-center space-x-2">
          <Profile />
        </a>
      </Link>
    ) : (
      <div className="inline-flex items-center space-x-2">
        <Profile />
      </div>
    )
  ) : null
}

export async function getStaticProps(context) {
  const filepath = path.join(ARTICLES_PATH, `${context.params.slug}.mdx`)

  const {mtimeMs} = fs.statSync(filepath)
  const pageBuffer = fs.readFileSync(filepath)
  const {content, data} = matter(pageBuffer.toString())
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require(`remark-slug`),
        [
          require('remark-autolink-headings'),
          {
            content: {
              type: 'element',
              tagName: 'link-icon',
              properties: {
                style:
                  'display: inline; margin-left: -2rem; margin-right: 0.5rem;',
              },
            },
          },
        ],
        require('remark-external-links'),
        require('remark-deflist'),
      ],
      rehypePlugins: [
        [
          require(`rehype-shiki`),
          {
            theme: `./src/styles/lover-theme-dark.json`,
            useBackground: true,
          },
        ],
      ],
    },
  })

  return {
    props: {
      ...data,
      lastUpdated: mtimeMs,
      filename: `${context.params.slug}.mdx`,
      source: mdxSource,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const postFilePaths = fs
    .readdirSync(ARTICLES_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
    .map((filename) => filename.slice(0, filename.indexOf('.mdx')))

  return {
    paths: postFilePaths.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}
