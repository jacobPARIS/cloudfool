import PageHeader from 'components/page-header'
import SocialBanner from 'components/social-banner-small'
import Head from 'next/head'
import Link from 'next/link'

export default function Resume() {
  return (
    <div className="screen:bg-gray-50 dark:bg-gray-800">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader className="print:hidden" />

      <main className="px-4 mx-auto screen:max-w-2xl screen:-mb-48 dark:bg-gray-900 ">
        <section className="pb-4 screen:pt-4">
          <div>
            <h1 className="leading-11 screen:text-64 print:text-48 font-700">
              Jacob<span className="print:hidden">&nbsp;</span>Paris
              <span className="text-gray-300 screen:hidden">.com</span>
            </h1>
            <p>
              Canadian citizen, working remotely worldwide (open to relocation)
            </p>
          </div>
        </section>

        <SocialBanner className="screen:mb-8 print:mb-4" />

        <p className="mb-4">
          Skilled in React, Typescript, GraphQL, Vue, and HTML/CSS with a focus
          on accessibility
        </p>

        <h2 className="mb-4 print:hidden text-16 font-500"> History </h2>
        <section
          className="mx-auto screen:px-4 screen:py-3 screen:mb-8 screen:max-w-2xl screen:bg-white screen:rounded screen:shadow-sm"
          style={{transform: 'translate(0,0)'}}
        >
          <h3 className="leading-tight screen:text-28 print:text-lg screen:font-light print:font-bold">
            Cannect Invest
          </h3>
          <div className="mb-4 text-14">
            <strong>Mortgage software developer</strong>, October 2019 to
            present
          </div>

          <p className="mb-5 text-gray-500">
            <a
              href="https://www.cannect.ca/"
              target="blank"
              rel="noopener noreferrer"
            >
              Cannect
            </a>{' '}
            had been using an internal CRM they built to streamline the mortgage
            application process, and they brought me on early in the process of
            building a second scalable version using Vue/GraphQL that could
            become its own product to licence to other brokerages.
          </p>

          <p className="mb-5 text-gray-500">
            Each project had a lead, and
            <Link href="resume/cannect">
              <a> I led many of them. </a>
            </Link>
            Some highlights:
          </p>

          <ul className="mb-5 ml-8 text-gray-500 list-disc">
            <li>
              Built three single-page applications for agents, borrowers, and
              affiliates.
            </li>
            <li>
              Integrated the CRM with lead-gen forms and email drip campaigns.
            </li>
            <li> Worked closely with customers and a product design team. </li>
            <li> Designed CI/CD pipeline and local docker dev environment. </li>
          </ul>
        </section>

        <section
          className="mx-auto screen:px-4 screen:py-3 screen:mb-8 screen:max-w-2xl screen:bg-white screen:rounded screen:shadow-sm"
          style={{transform: 'translate(0,0)'}}
        >
          <h3 className="leading-tight screen:text-28 print:text-lg screen:font-light print:font-bold">
            ToolStache
          </h3>
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

          <ul className="mb-5 ml-8 text-gray-500 list-disc">
            <li>
              Worked directly with the tool-crib, accounting, and dispatch teams
              to design + improve each flow.
            </li>
            <li>Automated an email billing system to charge subcontractors.</li>
          </ul>
        </section>

        <div className="print:hidden ">
          <h2 className="screen:mb-4 text-16 font-500"> Other </h2>

          <section
            className="px-4 py-3 mx-auto mb-8 screen:max-w-2xl screen:bg-white screen:rounded screen:shadow-sm"
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
              , May 2021
            </div>
          </section>

          <section
            className="px-4 py-3 mx-auto mb-8 screen:max-w-2xl screen:bg-white screen:rounded screen:shadow-sm"
            style={{transform: 'translate(0,0)'}}
          >
            <h3 className="mb-4 leading-tight text-28 font-300">Articles</h3>
            <ul className="ml-8 list-disc">
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
        </div>
      </main>
      <footer className="pt-48 pb-8 text-center bg-blue-950 print:hidden">
        <small className="text-white"> Made with ❤️ by Jacob Paris </small>
      </footer>
    </div>
  )
}
