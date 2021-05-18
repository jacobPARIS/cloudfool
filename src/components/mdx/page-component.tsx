import React from 'react'
export default function PageComponent({children}) {
  const [key, setKey] = React.useState(Math.random())

  return (
    <div>
      <div key={key}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            resetButton: (
              <button
                className="mb-3 text-sm text-blue-700 underline"
                onClick={() => setKey(Math.random())}
              >
                {' '}
                Reset{' '}
              </button>
            ),
          })
        })}
      </div>
    </div>
  )
}
