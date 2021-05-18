import React from 'react'
import TestStatus from '../test-status'

export default function TestTextInput({children, resetButton, ...props}) {
  const [username, setUsername] = React.useState('')

  return (
    <div {...props}>
      <div className="p-3 my-3 bg-gray-100 rounded-md">
        <div className="flex justify-between">
          <label htmlFor="input" className="block mb-3 text-sm text-gray-700">
            {' '}
            Username{' '}
          </label>
          {resetButton}
        </div>
        <input
          onChange={(e) => setUsername(e.currentTarget.value)}
          type="text"
          id="input"
          default-value={username}
          className="px-3 py-2 text-gray-900 border rounded-md"
        />
      </div>

      {children}
      <TestStatus isSuccessful={username === 'Alice'} />
    </div>
  )
}
