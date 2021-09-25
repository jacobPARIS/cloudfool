import React from 'react'

export default function Tweet({
  text,
  imageUrl = '',
  tweetUrl = '',
  className = '',
  ...props
}) {
  const paragraphs = Array.isArray(text) ? text : [text]
  // use react-query to fetch a tweet from twitter by id
  return (
    <div
      {...props}
      className={`relative p-4 bg-white shadow-sm hover:opacity-60 rounded-xl ${className}`}
    >
      {tweetUrl ? <a href={tweetUrl} className="absolute inset-0" /> : null}

      <div className="py-2 mb-4">
        {/* Image on the left, text on the right  */}

        <div className="flex items-center">
          <img
            src="/images/jacob.png"
            alt="Tweet"
            className="w-12 rounded-full"
          />
          <div className="px-2">
            <div>
              <span className="font-semibold">Jacob Paris 🇨🇦</span>
            </div>
            <div>
              <span className="text-gray-700">@jacobmparis</span>
            </div>
          </div>
        </div>
      </div>

      {paragraphs.map((paragraph) => (
        <p className="mb-4 text-black">{paragraph}</p>
      ))}

      {imageUrl ? <img className="border rounded-lg" src={imageUrl} /> : null}
    </div>
  )
}
