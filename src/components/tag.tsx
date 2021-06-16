import Link from 'next/link'

export default function Tag({text, slug, highlight}: any) {
  return (
    <Link href={slug ? `/blog?tag=${slug}` : '/blog'}>
      <a
        className={`px-2 py-1 mx-1 capitalize rounded hover:bg-purple-100 ${
          highlight && 'bg-purple-100'
        } text-12`}
      >
        {text}
      </a>
    </Link>
  )
}
