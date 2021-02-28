import Link from 'next/link'
import Markdown from 'react-markdown'

export default function CardRow({resource}: any) {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 dark:text-gray-200 sm:p-8">
      <div className="flex flex-col items-center space-x-0 space-y-5 text-center sm:flex-row sm:space-x-5 sm:space-y-0 sm:text-left">
        <div className="flex flex-col items-center justify-center sm:items-start">
          <h2 className="mb-1 text-xs font-semibold tracking-tight text-gray-700 uppercase dark:text-gray-300">
            {resource.name}
          </h2>
          <Link href={resource.path}>
            <a className="hover:text-red-600 dark:hover:text-red-300">
              <h3 className="text-xl font-bold leading-tighter">
                {resource.title}
              </h3>
            </a>
          </Link>

          <Markdown
            source={resource.description || ''}
            className="prose-sm prose dark:prose-dark dark:prose-dark-sm max-w-none"
          />
        </div>
      </div>
    </div>
  )
}
