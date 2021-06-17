import Link from 'next/link'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

import Tag from './tag'
export default function CardRow({
  resource: {color = 'gray', ...resource},
  className,
}: any) {
  const tags = resource.tags || []

  return (
    <section
      style={{zIndex: 1}}
      className={`col-span-6 px-5 py-8 rounded shadow-sm sm:p-8 bg-${color}-50 ${className}`}
    >
      <div className="flex flex-col items-center space-x-0 space-y-5 text-center sm:flex-row sm:space-x-5 sm:space-y-0 sm:text-left">
        <div className="flex flex-col items-center justify-center sm:items-start ">
          <header>
            {tags.length ? (
              <ul className="flex flex-wrap -mx-2 -mt-6">
                {tags.map((tag) => (
                  <li>
                    <Tag text={tag} slug={tag} />
                  </li>
                ))}
              </ul>
            ) : null}

            <h2 className="mb-4 leading-tight">{resource.title}</h2>
          </header>

          <Markdown
            children={resource.description || ''}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            className="leading-relaxed prose max-w-none"
          />

          <footer className="mt-3">
            <Link href={resource.path}>
              <a className="font-400">Read more</a>
            </Link>
          </footer>
        </div>
      </div>
    </section>
  )
}
