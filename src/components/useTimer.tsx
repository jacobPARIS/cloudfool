import * as React from 'react'

export function useTimer(cadence = 1000) {
  const [time, setTime] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1)
    }, cadence)

    return () => clearInterval(interval)
  }, [time])

  return time
}
