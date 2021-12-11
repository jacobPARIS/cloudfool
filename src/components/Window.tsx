import * as React from 'react'

import {AnimateSharedLayout} from 'framer-motion'

export function Window({
  colors,
  titleElement = () => <span />,
  footerElement = () => <span />,
  children,
}) {
  return (
    <div
      className="rounded sm:py-6 sm:px-14 sm:rounded-none"
      style={{backgroundColor: '#73669e'}}
    >
      <div className="w-full rounded shadow-md">
        <div
          className="z-10 shadow-sm rounded-tl-md rounded-tr-md"
          style={{
            background: colors['activityBar.background'],
            borderBottom: colors['titleBar.border']
              ? `1px solid ${colors['titleBar.border']}`
              : '',
            fontFamily: '"Comic Code Ligatures", sans-serif',
          }}
        >
          {titleElement()}
        </div>
        {/* Control height here  */}
        <div
          className="relative w-full h-72 sm:h-40"
          style={{
            background: colors['editor.background'],
            color: colors['editor.foreground'],
            paddingTop: `50%`,
          }}
        >
          <div className="absolute inset-0 flex overflow-hidden ">
            <div
              className="z-10 hidden h-full sm:block"
              style={{
                background: colors['activityBar.background'],
                borderRight:
                  colors['activityBar.border'] &&
                  `1px solid ${colors['activityBar.border']}`,
              }}
            >
              <div className="p-3 border-l ">
                <svg
                  className="h-6 fill-current w-100"
                  viewBox="0 0 24 24"
                  style={{fill: colors['activityBar.foreground']}}
                >
                  <path
                    fillRule="evenodd"
                    d="m8.5 0h9l4.5 4.5v12.1l-1.3 1.4h-4.7v4.6l-1.4 1.4h-12.1l-1.5-1.4v-15.1l1.5-1.5h4.5v-4.5zm7.5 1.5v4.5h4.5v10.5h-12v-15zm3.9 3-2.4-2.4v2.4zm-12.9 3v9.1l1.5 1.4h6v4.5h-12v-15z"
                  />
                </svg>
              </div>

              <div className="p-3">
                <svg
                  className="h-6 opacity-50 fill-current w-100"
                  viewBox="0 0 24 24"
                  style={{fill: colors['activityBar.foreground']}}
                >
                  <path
                    fillRule="evenodd"
                    d="m22 8.3c0 3.7-3 6.7-6.7 6.7-3.8 0-6.8-3-6.8-6.7 0-3.8 3-6.8 6.8-6.8 3.7 0 6.7 3 6.7 6.8zm1.5 0c0 4.5-3.7 8.2-8.2 8.2-2 0-3.7-.7-5.1-1.8l-8.1 9.2-1.1-1 8.1-9.2c-1.3-1.4-2.1-3.4-2.1-5.4 0-4.6 3.7-8.3 8.3-8.3 4.5 0 8.2 3.7 8.2 8.3z"
                  />
                </svg>
              </div>

              <div className="p-3">
                <svg
                  className="h-6 opacity-50 fill-current w-100"
                  viewBox="0 0 24 24"
                  style={{fill: colors['activityBar.foreground']}}
                >
                  <path
                    fillRule="evenodd"
                    d="m21 8.3c0-.7-.2-1.4-.5-2-.4-.6-.9-1.1-1.6-1.4-.6-.3-1.3-.5-2-.4s-1.3.3-1.9.7c-.5.4-1 1-1.2 1.6-.3.7-.4 1.4-.2 2.1.1.7.4 1.3.8 1.8.5.5 1.1.9 1.8 1.1-.3.5-.6.9-1.1 1.2s-1 .5-1.6.5h-3c-1.1 0-2.2.4-3 1.2v-7.3c.9-.2 1.7-.7 2.3-1.4.5-.8.8-1.7.7-2.6-.1-1-.5-1.8-1.2-2.4-.7-.7-1.6-1-2.5-1-1 0-1.9.3-2.6 1-.7.6-1.1 1.4-1.2 2.4-.1.9.2 1.8.7 2.6.6.7 1.4 1.2 2.3 1.4v9.2c-.9.1-1.7.6-2.3 1.4-.6.7-.8 1.6-.8 2.6.1.9.5 1.7 1.2 2.4.6.6 1.5 1 2.4 1.1.9 0 1.8-.3 2.6-.8.7-.6 1.2-1.4 1.3-2.3.2-1 0-1.9-.5-2.7-.4-.8-1.2-1.4-2.1-1.6.3-.5.7-.9 1.1-1.2.5-.3 1-.5 1.6-.5h3c.9 0 1.8-.3 2.6-.8.8-.6 1.3-1.4 1.6-2.2.9-.2 1.8-.6 2.4-1.3s.9-1.5.9-2.4zm-16.5-4.5c0-.5.1-.9.4-1.3.2-.4.6-.7 1-.8.4-.2.9-.2 1.3-.2.4.1.8.3 1.1.7.4.3.6.7.7 1.1 0 .4 0 .9-.2 1.3-.1.4-.4.8-.8 1-.4.3-.8.4-1.2.4-.6 0-1.2-.2-1.6-.7-.5-.4-.7-1-.7-1.5zm4.5 16.5c0 .4-.1.8-.4 1.2-.2.4-.6.7-1 .8-.4.2-.9.2-1.3.2-.4-.1-.8-.3-1.1-.7-.4-.3-.6-.7-.7-1.1 0-.4 0-.9.2-1.3.1-.4.4-.8.8-1 .4-.3.8-.4 1.3-.4s1.1.2 1.5.7c.5.4.7 1 .7 1.6zm8.3-9.8c-.5 0-.9-.1-1.3-.4-.4-.2-.7-.6-.8-1-.2-.4-.2-.9-.2-1.3.1-.4.3-.8.7-1.1.3-.4.7-.6 1.1-.7.4 0 .9 0 1.3.2.4.1.8.4 1 .8.3.4.4.8.4 1.3s-.2 1.1-.7 1.5c-.4.5-1 .7-1.5.7z"
                  />
                </svg>
              </div>

              <div className="p-3">
                <svg
                  className="h-6 opacity-50 fill-current w-100"
                  viewBox="0 0 24 24"
                  style={{fill: colors['activityBar.foreground']}}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.9 13.5L9.6 14.8C9.4 14 9 13.3 8.3 12.8 7.6 12.3 6.8 12 6 12 5.2 12 4.4 12.3 3.7 12.8 3 13.3 2.6 14 2.4 14.8L1.1 13.5 0 14.6 1.7 16.3 1.5 16.5V18H0V19.5H1.5V19.6C1.6 20.1 1.7 20.5 1.9 21L0 22.9 1.1 24 2.7 22.4C3.1 22.9 3.6 23.3 4.2 23.5 4.7 23.8 5.4 24 6 24 6.6 24 7.3 23.8 7.8 23.5 8.4 23.3 8.9 22.9 9.3 22.4L10.9 24 12 22.9 10.1 21C10.3 20.5 10.4 20 10.5 19.6V19.5H12V18H10.5V16.5L10.3 16.3 12 14.6 10.9 13.5ZM6 13.5C6.6 13.5 7.2 13.7 7.6 14.2 8 14.6 8.3 15.2 8.3 15.8H3.8C3.8 15.2 4 14.6 4.4 14.2 4.8 13.7 5.4 13.5 6 13.5ZM9 19.5C8.9 20.3 8.6 21 8 21.5 7.5 22.1 6.8 22.4 6 22.5 5.2 22.4 4.5 22.1 4 21.5 3.4 21 3.1 20.3 3 19.5V17.3H9V19.5ZM23.8 9.6V10.9L13.5 17.4V15.6L22 10.2 9 2V11.5C8.5 11.1 8 10.9 7.5 10.7V0.6L8.6 0 23.8 9.6Z"
                  />
                </svg>
              </div>

              <div className="p-3">
                <svg
                  className="h-6 opacity-50 fill-current w-100"
                  viewBox="0 0 24 24"
                  style={{fill: colors['activityBar.foreground']}}
                >
                  <path
                    fillRule="evenodd"
                    d="M13.5 1.5L15 0H22.5L24 1.5V9L22.5 10.5H15L13.5 9V1.5ZM15 1.5V9H22.5V1.5H15ZM0 15V6L1.5 4.5H9L10.5 6V13.5H18L19.5 15V22.5L18 24H10.5 9 1.5L0 22.5V15ZM9 13.5V6H1.5V13.5H9ZM9 15H1.5V22.5H9V15ZM10.5 22.5H18V15H10.5V22.5Z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col flex-grow">
              <pre
                className="z-0 px-2 py-4 -mr-4 overflow-y-scroll text-base sm:text-md"
                style={{
                  maxWidth: 'unset',
                  fontFamily:
                    '"Comic Code Ligatures", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
                }}
              >
                <AnimateSharedLayout>{children}</AnimateSharedLayout>
              </pre>
            </div>
          </div>
        </div>
        <footer
          className="py-1 rounded-bl rounded-br"
          style={{
            background: colors['statusBar.background'],
            color: colors['statusBar.foreground'],
            fontFamily: '"Comic Code Ligatures", sans-serif',
          }}
        >
          {footerElement()}
        </footer>
      </div>
    </div>
  )
}
