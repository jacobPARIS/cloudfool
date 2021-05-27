import Link from 'next/link'
export default function PageHeader() {
  return (
    <header className="flex justify-between bg-blue-950">
      <div className="px-4 py-2 text-lg text-blue-100">
        <Link href="/">
          <a className="text-blue-100 hover:text-blue-200">Jacob Paris</a>
        </Link>
      </div>

      <nav>
        <ul className="flex">
          <li className="px-4 py-2 text-lg text-blue-100">
            <Link href="/">
              <a className="text-blue-100 hover:text-blue-200">Articles</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
