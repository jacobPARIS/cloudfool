import fs from 'fs'
import path from 'path'
import * as React from 'react'
import {NextSeo} from 'next-seo'

import mdxComponents from 'components/mdx'
import PageHeader from 'components/page-header'

import {serialize} from 'next-mdx-remote/serialize'
// @ts-ignore
import {MDXRemote} from 'next-mdx-remote'
import Image from 'next/image'
import {useRouter} from 'next/router'
import matter from 'gray-matter'
import Link from 'next/link'

const ARTICLES_PATH = path.join(process.cwd(), 'src', 'articles')
export default function Blog({title = 'Missing title', seo = {}, source}: any) {
  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_DEPLOYMENT_URL + router.asPath
  const canonicalUrl = seo.canonicalUrl ? seo.canonicalUrl : url

  const ogImage = seo.ogImage ? seo.ogImage : `https://placekitten.com/500/300`

  return (
    <>
      <NextSeo
        title={title}
        description={seo.description}
        openGraph={{
          title: seo.ogTitle || title,
          description: seo.ogDescription,
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
          site: seo.site || 'jacobparis',
          handle: seo.handle,
        }}
        canonical={canonicalUrl}
      />

      <PageHeader />

      <article className="max-w-screen-md px-5 mx-auto mt-3 mb-16 lg:mt-14 md:mt-8">
        <header>
          <h1 className="w-full max-w-screen-md mt-10 mb-4 leading-tight text-gray-800 text-28 font-300">
            {title}
          </h1>
        </header>

        <small className="text-gray-500 text-14">
          Last updated by
          <a
            href="https://twitter.com/intent/follow?screen_name=jacobmparis"
            className="mx-1 text-blue-700 underline hover:text-purple-700"
            rel="noopener"
            target="blank"
          >
            Jacob Paris
          </a>
        </small>
        <hr className="mt-2 mb-12" />

        <main className="leading-relaxed prose text-gray-500 dark:prose-dark sm:prose-lg lg:prose-xl max-w-none text-17">
          <MDXRemote {...source} components={mdxComponents} />
        </main>
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
  const pageBuffer = fs.readFileSync(
    path.join(ARTICLES_PATH, `${context.params.slug}.mdx`),
  )
  const {content, data} = matter(pageBuffer.toString())
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require(`remark-slug`),
        require(`remark-footnotes`),
        require(`remark-code-titles`),
      ],
      rehypePlugins: [
        [
          require(`rehype-shiki`),
          {
            theme: `./src/styles/lover-theme-dark.json`,
            useBackground: false,
          },
        ],
      ],
    },
  })

  return {
    props: {...data, source: mdxSource},
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
