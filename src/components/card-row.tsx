import Link from 'next/link'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
export default function CardRow({resource}: any) {
  return (
    <div className="col-span-4 p-5 bg-white dark:bg-gray-800 dark:text-gray-200 sm:p-8">
      <div className="flex flex-col items-center space-x-0 space-y-5 text-center sm:flex-row sm:space-x-5 sm:space-y-0 sm:text-left">
        <div className="flex flex-col items-center justify-center text-gray-800 sm:items-start ">
          <Link href={resource.path}>
            <a className="hover:text-red-600 dark:hover:text-red-300">
              <h2 className="mb-4 leading-tight text-28 font-300">
                {resource.title}
              </h2>
            </a>
          </Link>

          <Markdown
            children={resource.description || ''}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            className="leading-relaxed prose text-gray-500 dark:prose-dark dark:prose-dark-sm max-w-none text-17"
          />
        </div>
      </div>
    </div>
  )
}
