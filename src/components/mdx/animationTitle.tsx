export function animationTitle({step, length, title, language = 'JS'}) {
  return (
    <div className="flex items-center justify-between px-4 py-1 m-0 mx-auto text-white font-500">
      <p className="px-2 text-sm text-blue-100 opacity-50">{language}</p>

      <h2 className="flex-grow px-4 text-sm tracking-tighter text-center text-blue-100 font-500">
        {title}
      </h2>

      <p className="px-2 text-sm text-blue-100 opacity-50">
        <span className="sr-only">Step </span>
        {Math.min(step, length - 1)}/{length - 1}
      </p>
    </div>
  )
}
