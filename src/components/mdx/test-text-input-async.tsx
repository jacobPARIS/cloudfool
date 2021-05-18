import React from 'react'
import TestStatus from '../test-status'

export default function TestTextInputAsync({children, resetButton, ...props}) {
  const [username, setUsername] = React.useState('')

  const fetchUsername = () => {
    setTimeout(() => {
      setUsername('Alice')
    }, 1500)
  }

  return (
    <div {...props}>
      <div className="p-3 my-3 bg-gray-100 rounded-md">
        <div className="flex justify-between">
          <label htmlFor="input" className="block mb-3 text-sm text-gray-700">
            Username
          </label>
          {resetButton}
        </div>
        <div className="flex">
          <input
            type="text"
            id="input"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            className="px-3 py-2 text-gray-900 border rounded-md"
          />

          <button
            className="mx-2 text-blue-700 underline"
            onClick={() => fetchUsername()}
          >
            Fetch username
          </button>
        </div>
      </div>

      {children}
      <TestStatus isSuccessful={username === 'Alice'} />
    </div>
  )
}
