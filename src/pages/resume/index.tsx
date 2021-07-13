import PageHeader from 'components/page-header'
import SocialBanner from 'components/social-banner-small'
import Head from 'next/head'
import Link from 'next/link'

export default function Resume() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="max-w-2xl px-4 mx-auto -mb-48 dark:bg-gray-900 ">
        <section className="py-8 ">
          <div>
            <h1 className="leading-11 text-64 font-700">Jacob Paris</h1>
          </div>
        </section>

        <SocialBanner className="mb-12" />

        <h2 className="mb-4 text-16 font-500"> Projects </h2>
        <section
          className="max-w-2xl px-4 py-3 mx-auto mb-8 bg-white rounded shadow-sm"
          style={{transform: 'translate(0,0)'}}
        >
          <h3 className="leading-tight text-28 font-300">Cannect Invest</h3>
          <div className="mb-4 text-14">
            <strong>Mortgage software developer</strong>, October 2019 to
            present
          </div>

          <p className="mb-5 text-gray-500">
            <a
              href="https://www.cannect.ca/"
              className="text-blue-500 underline"
              target="blank"
              rel="noopener noreferrer"
            >
              Cannect
            </a>{' '}
            had been using an internal CRM they built to streamline the mortgage
            application process, and they brought me on early in the process of
            building a second scalable version that could become its own product
            to licence to other brokerages.
            <Link href="resume/cannect">
              <a> I built a lot of things there…</a>
            </Link>
          </p>
        </section>

        <section
          className="max-w-2xl px-4 py-3 mx-auto mb-8 bg-white rounded shadow-sm"
          style={{transform: 'translate(0,0)'}}
        >
          <h3 className="leading-tight text-28 font-300">ToolStache</h3>
          <div className="mb-4 text-14">
            <strong>Founder</strong>, February 2017 to 2020
          </div>
          <p className="mb-5 text-gray-500">
            <Link href="toolstache">
              <a>ToolStache</a>
            </Link>{' '}
            was a side project that found itself some customers.
          </p>

          <p className="mb-5 text-gray-500">
            I started it to help the welding shop I worked for manage their
            assets to cut down on theft, repurchasing, and missed bill-out
            opportunities, which amounted to{' '}
            <strong> over $10K in savings each month. </strong>
          </p>
        </section>

        <h2 className="mb-4 text-16 font-500"> Other </h2>

        <section
          className="max-w-2xl px-4 py-3 mx-auto mb-8 bg-white rounded shadow-sm"
          style={{transform: 'translate(0,0)'}}
        >
          <h3 className="leading-tight text-28 font-300">
            Interview with No CS Degree
          </h3>
          <div className="mb-4 text-14">
            <a
              href="https://www.nocsdegree.com/self-taught-developer-digital-nomad/"
              className="text-blue-500 underline"
              target="blank"
              rel="noopener noreferrer"
            >
              Read the interview
            </a>
            , May 2021{' '}
          </div>
        </section>

        <section
          className="max-w-2xl px-4 py-3 mx-auto mb-8 bg-white rounded shadow-sm"
          style={{transform: 'translate(0,0)'}}
        >
          <h3 className="mb-4 leading-tight text-28 font-300">Articles</h3>
          <ul className="ml-4 list-disc">
            <li>
              <Link href="blog?tag=React">
                <a>React</a>
              </Link>
            </li>
            <li>
              <Link href="blog?tag=Javascript">
                <a>Vue</a>
              </Link>
            </li>
            <li>
              <Link href="blog?tag=GraphQL">
                <a>Apollo GraphQL</a>
              </Link>
            </li>
            <li>
              <Link href="blog?tag=Typescript">
                <a>Typescript</a>
              </Link>
            </li>
            <li>
              <Link href="blog?tag=CSS">
                <a>CSS</a>
              </Link>
            </li>
            <li>
              <Link href="blog?tag=HTML">
                <a>HTML</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <footer className="pt-48 pb-8 text-center bg-blue-950">
        <small className="text-white"> Made with ❤️ by Jacob Paris </small>
      </footer>
    </div>
  )
}
