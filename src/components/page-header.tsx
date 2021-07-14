import React from 'react'

import Link from 'next/link'

export default function PageHeader({
  children = null,
  ...props
}: React.PropsWithChildren<any>) {
  return (
    <div {...props}>
      <header className="flex justify-between ">
        <div className="px-4 pt-3 text-lg">
          <Link href="/">
            <a>Jacob Paris</a>
          </Link>
        </div>

        <div className="flex px-4">
          <nav>
            <ul className="flex">
              <li className="px-4 py-2 text-lg text-blue-100">
                <Link href="/blog">
                  <a>Articles</a>
                </Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </header>
    </div>
  )
}
