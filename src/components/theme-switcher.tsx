import {useTheme} from 'next-themes'

const themes = [
  {
    name: 'default',
    displayName: 'Default',
    color: '#ff335f',
  },
  {
    name: 'stripe',
    displayName: 'Stripe',
    color: '#5469d4',
  },
]

export default function ThemeSwitcher({show = true}) {
  const {theme, setTheme} = useTheme()

  return show ? (
    <div
      className="border-b"
      style={{
        fontSize: '16px',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
      }}
    >
      <ul className="flex" style={{margin: '0 -0.25em', padding: '0.5em'}}>
        {themes.map((item) => {
          return (
            <li key={item.name} style={{margin: '0 0.25em'}}>
              <button
                aria-pressed={theme === item.name}
                onClick={() => setTheme(item.name)}
                className="rounded"
                style={{
                  padding: '1em 1.5em',
                  backgroundColor: item.color,
                  color: 'white',
                }}
              >
                <span>{item.displayName}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  ) : null
}
