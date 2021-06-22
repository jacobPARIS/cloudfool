import Head from 'next/head'

import NextImage from 'next/image'
import NextLink from 'next/link'
import {NextSeo} from 'next-seo'

Assets.theme = 'default'
export default function Assets() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <Head>
        <title>Asset management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="ToolStache Asset Management Software"
        description="ToolStache is the latest product from Stache Industries that helps
        Alberta oilfield companies manage and track their assets to cut down
        on theft, repurchasing, and missed bill-out opportunities."
        openGraph={{
          title: 'ToolStache Asset Management Software',
          description:
            'ToolStache is the latest product from Stache Industries that helps Alberta oilfield companies manage and track their assets to cut down on theft, repurchasing, and missed bill-out opportunities.',
          url: 'https://www.jacobparis.com/toolstache',
          images: [
            {
              url: '/images/toolstache_2021-06-22-20-06-48.png',
              alt:
                'ToolStache, SaaS asset management system, Created by Jacob Paris',
            },
          ],
        }}
        twitter={{
          cardType: 'summary',
          site: 'https://www.jacobparis.com',
          handle: 'jacobmparis',
        }}
        canonical="https://www.jacobparis.com/toolstache"
      />
      <header
        className="px-12 py-8 bg-cover text-gray-50"
        style={{backgroundImage: 'url(/images/assets_2021-06-22-16-36-02.png)'}}
      >
        <h1 className="mb-4 text-4xl font-bold md:text-6xl"> ToolStache </h1>
        <p className="mb-4 text-2xl md:text-4xl">
          The easiest inventory management system ever made
        </p>

        <hr className="mb-4 opacity-20" />

        <p className="mb-4 font-500">
          ToolStache is the latest product from Stache Industries that helps
          Alberta oilfield companies manage and track their assets to cut down
          on theft, repurchasing, and missed bill-out opportunities.
        </p>
      </header>
      <section
        className="px-12 py-24 bg-black bg-no-repeat bg-contain text-gray-50"
        style={{backgroundImage: 'url(/images/assets_2021-06-22-16-39-09.png)'}}
      >
        <div className="flex flex-wrap">
          <div className="flex-1 w-96 h-96" style={{flexBasis: '24rem'}} />
          <div className="ml-auto">
            <div className="max-w-xs mb-8 ml-auto bg-black bg-opacity-50 rounded">
              <h2> Be the best at your job </h2>
              <span className="font-500">Detailed task walkthroughs</span>
            </div>

            <p className="max-w-xs py-3 pr-3 mb-4 ml-auto -mr-3 bg-black bg-opacity-50 rounded ">
              We've all used programs that are nothing more than glorified
              spreadsheets and forms. With Assets, we're breaking that mold.
            </p>
            <p className="max-w-xs py-3 pr-3 mb-4 ml-auto -mr-3 bg-black bg-opacity-50 rounded">
              We've built detailed walkthroughs for every task into the core of
              our product. You won't have mistakes. You'll work faster, and with
              more confidence than before.
            </p>
          </div>
        </div>
      </section>
      <section className="px-12 py-8 bg-white">
        <h2> Say no to inefficiency </h2>
        <div className="mb-4 font-500"> Bulk processing </div>

        <p className="mb-4">
          Machines were invented to automate tasks. Don't do the computer's job
          for it. We've streamlined asset management so you can <b>search</b>,{' '}
          <b>select</b>, and <b>edit your items</b>, all at once, instantly.
        </p>
        <p className="mb-4">
          Spending less time on the grunt work gives you more time for the
          things that matter.
        </p>
      </section>
      <section>
        <NextImage
          src="/images/assets_2021-06-22-16-58-20.png"
          width="861"
          height="588"
        />
      </section>
      <section className="px-12 py-8">
        <h2> Catch theft before it happens </h2>
        <div className="mb-4 font-500"> Flexible tracking, anywhere </div>

        <p className="mb-4">
          In the complicated construction industry, it can be hard to keep track
          of everything. We're here to fix that.
        </p>
        <p className="mb-4">
          Sign out assets to employees, to contractors, onto job numbers,
          trucks, or clients—and view a detailed history of every asset.
        </p>
      </section>
      <section
        className="px-12 py-24 bg-black bg-no-repeat bg-contain text-gray-50"
        style={{backgroundImage: 'url(/images/assets_2021-06-22-17-03-45.png)'}}
      >
        <div className="flex flex-wrap">
          <div className="flex-1 w-96 h-96" style={{flexBasis: '24rem'}} />
          <div className="ml-auto">
            <div className="max-w-xs mb-8 ml-auto bg-black bg-opacity-50 rounded">
              <h2> Focus on what matters </h2>
              <span className="font-500">Fine grained user control</span>
            </div>

            <p className="max-w-xs py-3 pr-3 mb-4 ml-auto -mr-3 bg-black bg-opacity-50 rounded ">
              Giving every employee access to every aspect of the business isn't
              just inefficient, it's a security risk. We've built a{' '}
              <b>powerful role system</b> that lets you define and{' '}
              <b>assign access on a per-user basis</b>.
            </p>
            <p className="max-w-xs py-3 pr-3 mb-4 ml-auto -mr-3 bg-black bg-opacity-50 rounded">
              Let HR focus on managing users. Let the accounts receivable
              manager ignore non-billable items. Let supervisors focus only on
              their own active jobs.
            </p>
            <p className="max-w-xs py-3 pr-3 mb-4 ml-auto -mr-3 bg-black bg-opacity-50 rounded">
              Put the right people on the right jobs, and{' '}
              <b>the burden of micromanagement disappears</b>.
            </p>
          </div>
        </div>
      </section>
      <section className="px-12 py-8">
        <div className="">
          <h2 className="mb-4"> Track your items </h2>

          <p className="mb-8">
            Store, tag, and track any item you want to manage from tools and
            trucks to keys and cards. Add items one at a time or{' '}
            <b>do a batch operation</b> to import from a spreadsheet.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-500"> Add items </h3>
            <div className="grid flex-grow place-items-center">
              <NextImage
                src="/images/assets_2021-06-22-17-06-27.png"
                width="698"
                height="328"
                className="rounded"
              />
            </div>
            <p className="pt-3">
              When you add a new item, the system will automatically suggest the
              next ID for that product code
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-500"> Check item in </h3>
            <NextImage
              src="/images/assets_2021-06-22-17-12-49.png"
              width="696"
              height="387"
              className="rounded"
            />
            <p className="pt-3">Log who returned an item and when</p>
          </div>

          <div>
            <h3 className="mb-4 font-500"> Edit items </h3>
            <NextImage
              src="/images/assets_2021-06-22-17-13-19.png"
              width="692"
              height="445"
              className="rounded"
            />
            <p className="pt-3">Select multiple items and edit them at once</p>
          </div>

          <div>
            <h3 className="mb-4 font-500"> Check item out </h3>
            <NextImage
              src="/images/assets_2021-06-22-17-13-40.png"
              width="690"
              height="458"
              className="rounded"
            />
            <p className="pt-3">
              Log every item that goes out under any job, truck, supervisor, or
              client you wish
            </p>
          </div>
        </div>
      </section>
      <section className="px-12 py-8 bg-black text-gray-50">
        <h2 className="mb-4"> Advanced inventory management </h2>

        <p className="mb-4">
          Let's face it – some items are not worth the burden of tracking
          electronically. Low-value consumable items will still show up on
          reports but can be <b>exempted from inventory counts</b> to reduce
          overhead.
        </p>

        <p className="mb-4">
          Other items need to be tracked discretely so that the exact same item
          is returned. These items can be given{' '}
          <b>distinct identification numbers</b> and their history can be
          tracked individually.
        </p>
      </section>
      <section className="px-12 py-8">
        <h2 className="mx-auto mb-4 text-center"> Get notified immediately </h2>

        <p className="mx-auto mb-4">
          Exceptionally high-value items can be set to <b>notify their owner</b>{' '}
          every time they're checked out or in. If the checkout is suspicious
          the owner can follow up immediately.
        </p>

        <p className="mx-auto mb-4">
          Notifications can be instant <b>emails or text messages</b>, or just
          included on the daily or weekly reports.
        </p>
      </section>
      <section
        className="px-12 py-8 text-center bg-cover text-gray-50"
        style={{backgroundImage: 'url(/images/assets_2021-06-22-16-36-02.png)'}}
      >
        <p className="my-20 text-4xl">Ready to get started?</p>

        <NextLink href="mailto:sales@jacobparis.com">
          <a className="px-4 py-3 bg-yellow-500 rounded hover:bg-yellow-100">
            <div className="inline-block text-gray-800 hover:underline font-500">
              Contact sales
            </div>
          </a>
        </NextLink>

        <div className="py-10" />
      </section>
      <footer className="py-3 text-center bg-black text-gray-50 font-500">
        Created by{' '}
        <a
          href="https://twitter.com/intent/follow?screen_name=jacobmparis"
          rel="noopener"
          target="twitter"
          className="text-yellow-500 hover:text-white"
        >
          Jacob Paris
        </a>{' '}
        2017-2020
      </footer>
    </div>
  )
}
