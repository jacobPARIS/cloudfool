import Link from 'next/link'
export default function PageHeader() {
  return (
    <header className="flex justify-between bg-white border-b">
      <div className="px-4 pt-3 text-lg">
        <Link href="/">
          <a className="text-blue-950 hover:text-blue-800">Jacob Paris</a>
        </Link>
      </div>

      <nav>
        <ul className="flex">
          <li className="px-4 py-2 text-lg text-blue-100">
            <Link href="/blog">
              <a className="text-blue-950 hover:text-blue-800">Articles</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
