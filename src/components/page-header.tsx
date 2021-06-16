import Link from 'next/link'
export default function PageHeader() {
  return (
    <header className="flex justify-between ">
      <div className="px-4 pt-3 text-lg">
        <Link href="/">
          <a>Jacob Paris</a>
        </Link>
      </div>

      <nav>
        <ul className="flex">
          <li className="px-4 py-2 text-lg text-blue-100">
            <Link href="/blog">
              <a>Articles</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
