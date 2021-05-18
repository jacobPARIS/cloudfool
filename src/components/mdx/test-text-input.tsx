import React from 'react'
import TestStatus from '../test-status'

export default function TestTextInput({
  children,
  resetButton,
  defaultValue = '',
  dataTimeout = 0,
  inputTimeout = 0,
  ...props
}) {
  const [username, setUsername] = React.useState(
    dataTimeout ? '' : defaultValue,
  )

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (dataTimeout) {
        setUsername((username) => {
          return username ? username : defaultValue
        })
      }
    }, dataTimeout)

    return function cleanup() {
      clearTimeout(timeout)
    }
  }, [defaultValue, dataTimeout])

  const [showInput, setShowInput] = React.useState(inputTimeout ? false : true)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInput(true)
    }, inputTimeout)

    return function cleanup() {
      clearTimeout(timeout)
    }
  }, [inputTimeout])

  return (
    <div {...props}>
      <div className="p-3 my-3 bg-gray-100 rounded-md">
        <div className="flex justify-between">
          <label htmlFor="input" className="block mb-3 text-sm text-gray-700">
            Username
          </label>
          {resetButton}
        </div>
        {showInput ? (
          <input
            onChange={(e) => setUsername(e.currentTarget.value)}
            type="text"
            id="input"
            value={username}
            className="px-3 py-2 text-gray-900 border rounded-md"
          />
        ) : null}
      </div>

      {children}
      <TestStatus isSuccessful={showInput && username === 'Alice'} />
    </div>
  )
}
