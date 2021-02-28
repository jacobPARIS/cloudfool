import Link from 'next/link'
export default function PageHeader() {
  return (
    <header className="flex justify-between">
      <div className="px-4 py-3 text-lg text-gray-700 hover:text-red-700">
        <Link href="/">Jacob Paris</Link>
      </div>

      <nav>
        <ul className="flex">
          <li className="px-4 py-3 text-lg text-gray-700 hover:text-red-700">
            <Link href="/blog">Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
