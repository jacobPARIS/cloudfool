import PageHeader from 'components/page-header'
import fs from 'fs'
import matter from 'gray-matter'
// @ts-ignore
import {MDXRemote} from 'next-mdx-remote'
import {serialize} from 'next-mdx-remote/serialize'
import {NextSeo} from 'next-seo'
import Head from 'next/head'
import path from 'path'

import ThemePreview from '../../components/theme-preview'
import LoverDark from '../../styles/lover-theme-dark.json'
import StripeBlue from '../../styles/stripe-blue-color-theme.json'
import StripeGray from '../../styles/stripe-gray-color-theme.json'

Themes.theme = 'default'
export default function Themes({sources}) {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Themes by Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="VS Code Themes by Jacob Paris"
        description="Here is a list of VS Code themes I've published, such as From Paris with Love, the Stripe Documentation Blue Theme, and Stripe Docs Gray"
        openGraph={{
          title: 'VS Code Themes by Jacob Paris',
          description:
            "Here is a list of VS Code themes I've published, such as From Paris with Love, the Stripe Documentation Blue Theme, and Stripe Docs Gray",
          url: 'https://www.jacobparis.com/themes',
        }}
        twitter={{
          cardType: 'summary',
          site: 'https://www.jacobparis.com',
          handle: 'jacobmparis',
        }}
        canonical="https://www.jacobparis.com/themes"
      />

      <PageHeader />

      <header className="px-12 py-8 text-gray-50">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">VS Code Themes</h1>
        <p className="mb-4 text-2xl md:text-4xl">by Jacob Paris</p>
      </header>

      <section className="px-12 py-8 mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl text-gray-50" id="from-paris-with-love">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=jacobparis.lover"
            target="_blank"
            rel="noopener"
          >
            From Paris with Love
          </a>
        </h2>

        <div className="flex-row lg:flex">
          <div className="flex-grow max-w-lg px-4 py-3">
            <ThemePreview sources={sources.loverDark} theme={LoverDark} />
          </div>

          <div
            className="flex-shrink px-4 py-3 text-gray-50 opacity-80"
            style={{flexBasis: '40ch'}}
          >
            <p className="mb-4">
              From Paris with Love is a medium-contrast dark theme designed
              around cool colours that aren't too hard on the eyes.
            </p>

            <p className="mb-4">
              Welding steel (before I moved into tech) damaged my eyes and I can
              have light sensitivity issues looking at high contrast screens all
              day long.
            </p>

            <p className="mb-4">
              Most dark themes I've used are too dark and too high contrast
              which is hard on my eyes, so I designed this one to help mitigate
              those effects.
            </p>

            <p className="mb-4">
              Check it out on the
              <a
                href="https://marketplace.visualstudio.com/items?itemName=jacobparis.lover"
                target="_blank"
                rel="noopener"
              >
                {' '}
                VS Code Marketplace{' '}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="px-12 py-8 mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl text-gray-50" id="stripe-docs-blue">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=jacobparis.stripe-docs-theme"
            target="_blank"
            rel="noopener"
          >
            Stripe Docs Blue
          </a>
        </h2>

        <div className="flex-row lg:flex">
          <div className="flex-grow max-w-lg px-4 py-3 ">
            <ThemePreview sources={sources.stripeBlue} theme={StripeBlue} />
          </div>

          <div
            className="flex-shrink px-4 py-3 text-gray-50 opacity-80"
            style={{flexBasis: '40ch'}}
          >
            <p className="mb-4">
              This theme is based on the colors used in the
              <a
                href="https://stripe.com/docs/stripe-js"
                target="_blank"
                rel="noopener"
              >
                {' '}
                Stripe documentation{' '}
              </a>
              .
            </p>

            <p className="mb-4">
              The Stripe docs are highly regarded among developers as excellent
              examples of documentation done right, and I wanted to bring the
              beautiful code snippets to VS Code.
            </p>

            <p className="mb-4">
              To more closely match the documentation, I recommend the
              <strong> Menlo </strong>
              font.
            </p>

            <p className="mb-4">
              Check it out on the
              <a
                href="https://marketplace.visualstudio.com/items?itemName=jacobparis.stripe-docs-theme"
                target="_blank"
                rel="noopener"
              >
                {' '}
                VS Code Marketplace{' '}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="px-12 py-8 mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl text-gray-50" id="stripe-docs-gray">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=jacobparis.stripe-docs-theme"
            target="_blank"
            rel="noopener"
          >
            Stripe Docs Gray
          </a>
        </h2>

        <div className="lg:flex lg:flex-row">
          <div className="flex-grow max-w-lg px-4 py-3 ">
            <ThemePreview sources={sources.stripeGray} theme={StripeGray} />
          </div>

          <div
            className="flex-shrink px-4 py-3 text-gray-50 opacity-80"
            style={{flexBasis: '40ch'}}
          >
            <p className="mb-4">
              This theme is based on the colors used in the
              <a
                href="https://stripe.com/docs/js/element"
                target="_blank"
                rel="noopener"
              >
                {' '}
                Stripe Elements documentation{' '}
              </a>
              .
            </p>

            <p className="mb-4">
              The Stripe docs are highly regarded among developers as excellent
              examples of documentation done right, and I wanted to bring the
              beautiful code snippets to VS Code.
            </p>

            <p className="mb-4">
              To more closely match the documentation, I recommend the
              <strong> Menlo </strong>
              font.
            </p>

            <p className="mb-4">
              Check it out on the
              <a
                href="https://marketplace.visualstudio.com/items?itemName=jacobparis.stripe-docs-theme"
                target="_blank"
                rel="noopener"
              >
                {' '}
                VS Code Marketplace{' '}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(context) {
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
      sources: {
        stripeBlue: await renderExamples(
          `./src/styles/stripe-blue-color-theme.json`,
        ),
        stripeGray: await renderExamples(
          `./src/styles/stripe-gray-color-theme.json`,
        ),
        loverDark: await renderExamples(`./src/styles/lover-theme-dark.json`),
      },
    },
    revalidate: 1,
  }
}
