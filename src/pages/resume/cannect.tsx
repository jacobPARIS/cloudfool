import PageHeader from 'components/page-header'
import SocialBanner from 'components/social-banner'
import Head from 'next/head'

export default function ResumeCannect() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Head>
        <title>Jacob Paris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader />

      <main className="px-4 dark:bg-gray-900">
        <section className="max-w-2xl mx-auto -mb-24">
          <h3 className="mt-10 leading-tight text-28 font-300">
            Cannect Invest
          </h3>
          <div className="mb-4 text-14">October 2019 to present</div>

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
          </p>

          <p className="mb-5 text-gray-500">
            This product required the development of two consumer portals and
            eight backend services. The following projects were lead by me
          </p>

          <section
            className="px-4 py-3 mb-8 bg-white rounded shadow-sm"
            style={{transform: 'translate(0,0)'}}
          >
            <h4 className="mb-4 text-24 font-300">Product library</h4>

            <p className="mb-5 text-gray-500">
              The product library serves as a
              <em className="p-1 bg-yellow-100">
                curated list of every mortgage product available on the market
              </em>
              to Canadian consumers. This was accomplished through{' '}
              <em className="p-1 bg-yellow-100">
                a pipeline of data aggregators
              </em>{' '}
              combining both primary and secondary sources into a normalized
              feed of products that could be manually approved for merging into
              the existing database.
            </p>

            <p className="mb-5 text-gray-500">
              I started this project to replace the existing spreadsheet based
              entry system, which required an agent to update the list manually
              every time they discovered a new product. Often, these products
              were discovered by email or by manually checking specific lenders'
              portals.
            </p>

            <p className="mb-5 text-gray-500">
              Since the data was external and untrusted, some manual review was
              required, but a fully manual entry system guaranteed that the
              products would always be out of date and was prone to user error.
            </p>

            <p className="text-gray-500">
              This project primarily leveraged the
              <strong className="font-400">
                {' '}
                MongoDB Aggregation pipeline{' '}
              </strong>
              on Node.js
            </p>
          </section>

          <section
            className="px-4 py-3 mb-8 bg-white rounded shadow-sm"
            style={{transform: 'translate(0,0)'}}
          >
            <h4 className="mb-4 text-24 font-300">Product service</h4>

            <p className="mb-5 text-gray-500">
              The product service is essentially a calculator, with all the
              calculations for canadian mortgages including qualification
              criteria and penalty pricing built in.
            </p>

            <p className="mb-5 text-gray-500">
              The purpose of this project was to{' '}
              <em className="p-1 bg-yellow-100">
                extract financial logic out of the consumer applications
              </em>{' '}
              and services so it could be maintained in one place by domain
              experts and{' '}
              <em className="p-1 bg-yellow-100">
                reused with high confidence everywhere else
              </em>{' '}
              by developers who don't need to understand all there is about
              mortgages.
            </p>

            <p className="mb-5 text-gray-500">
              Applications could query the product service with customer
              information and get a list of qualifying and unqualifying products
              from the database, including price breakdowns, affordability
              information, agent commissions, lender details, and more
            </p>

            <p className="mb-5 text-gray-500">
              This project primarily leveraged{' '}
              <strong className="font-400"> Apollo GraphQL </strong> to
              construct the endpoints that allowed querying arbitrary data
              points with the minimum set of input data.{' '}
              <em className="p-1 bg-yellow-100">
                Each calculation was heavily tested using{' '}
                <strong className="font-400"> Jest </strong> to protect both
                business and financial logic from regressions.
              </em>
            </p>
          </section>

          <section
            className="px-4 py-3 mb-8 bg-white rounded shadow-sm"
            style={{transform: 'translate(0,0)'}}
          >
            <h4 className="mb-4 text-24 font-300">Mortgage service</h4>

            <p className="mb-5 text-gray-500">
              The mortgage service is{' '}
              <em className="p-1 bg-yellow-100"> a lead generation queue </em>{' '}
              that operates over a database of every mortgage we know about –
              whether that's new mortgages Cannect has issued, old mortgages
              applicants have disclosed, historical mortgages from a partner's
              existing book of business, etc – and{' '}
              <em className="p-1 bg-yellow-100">
                runs calculations daily against every product in search of new
                lead opportunities.
              </em>
            </p>

            <p className="mb-5 text-gray-500">
              As mortgages age, the cost of breaking them decreases, and as new
              products come out, many new opportunities can be generated from an
              existing set of data.
            </p>

            <p className="mb-5 text-gray-500">
              This project primarily leveraged{' '}
              <strong className="font-400"> AWS SQS </strong> to run an async
              queue, and <strong className="font-400"> Apollo GraphQL </strong>{' '}
              to run product service calculations against each mortgage.
            </p>
          </section>

          <section
            className="px-4 py-3 mb-8 bg-white rounded shadow-sm"
            style={{transform: 'translate(0,0)'}}
          >
            <h4 className="mb-4 text-24 font-300">Agent portal</h4>

            <p className="mb-5 text-gray-500">
              If you're looking to get a mortgage and buy a house, you'll hop on
              the phone with a mortgage agent who tries to find you the best
              available rate for you given your income and expenses.
            </p>

            <p className="mb-5 text-gray-500">
              The Agent Portal is what the agent would be using while they're on
              the phone with you, punching in information and reading back
              market rates in real-time, like{' '}
              <em className="p-1 bg-yellow-100">
                a CRM with an end-to-end mortgage application process built in
              </em>
              . Agents are able to:
            </p>

            <ul className="mb-4 ml-8">
              <li className="list-disc">
                see incoming leads from a variety of sources
              </li>
              <li className="list-disc">
                see the status on active applications
              </li>
              <li className="list-disc">
                <em className="py-1 bg-yellow-100 ">
                  experiment with rolling in existing debts to qualify for
                  different products
                </em>
              </li>
              <li className="list-disc">
                approve or reject documentation supplied by the applicant
              </li>
              <li className="list-disc">
                submit mortgage applications to lenders
              </li>
              <li className="list-disc">and more</li>
            </ul>

            <p className="mb-5 text-gray-500">
              It also features tooling for auditors to{' '}
              <em className="p-1 bg-yellow-100">
                review and compile documentation for compliance purposes.
              </em>
            </p>

            <p className="mb-5 text-gray-500">
              This project was built on{' '}
              <strong className="font-400"> Nuxt/Vue </strong> with{' '}
              <strong className="font-400"> VueApollo </strong> to manage both
              server state and communicate with the various services that
              empower the application
            </p>
          </section>

          <section
            className="px-4 py-3 mb-8 bg-white rounded shadow-sm"
            style={{transform: 'translate(0,0)'}}
          >
            <h4 className="mb-4 text-24 font-300">Lead funnels</h4>

            <p className="mb-5 text-gray-500">
              The lead funnels were{' '}
              <em className="p-1 bg-yellow-100">
                a suite of forms and calculators
              </em>{' '}
              designed to be embedded on websites and send leads back to Cannect
            </p>

            <p className="mb-5 text-gray-500">
              They integrated with the product service to{' '}
              <em className="p-1 bg-yellow-100">
                accurately assess each lead and calculate their potential value
              </em>
            </p>

            <p className="mb-5 text-gray-500">
              This project was built on{' '}
              <strong className="font-400"> Nuxt/Vue </strong> with{' '}
              <strong className="font-400"> VueX </strong> to manage state
              across pages and <strong className="font-400"> Cypress </strong>{' '}
              for end to end testing of every possible flow through each form
            </p>
          </section>
        </section>
      </main>
      <footer className="pt-48 pb-8 text-center bg-blue-950">
        <SocialBanner className="my-8" />

        <small className="text-white"> Made with ❤️ by Jacob Paris </small>
      </footer>
    </div>
  )
}

function sample(array: Array<any>) {
  return array[Math.floor(Math.random() * array.length)]
}
