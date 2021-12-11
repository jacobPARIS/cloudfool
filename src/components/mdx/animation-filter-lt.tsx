import {motion} from 'framer-motion'

import LoverDark from '../../styles/lover-theme-dark.json'
import {useTimer} from '../useTimer'
import {Window} from '../Window'
import {animationFooter} from './animationFooter'
import {animationTitle} from './animationTitle'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

function Highlight() {
  return (
    <motion.div
      layoutId="outline"
      className="absolute inset-0 px-2 py-1 -mx-2 -my-1 bg-blue-500 rounded"
      style={{zIndex: -1}}
      initial={false}
      transition={spring}
    />
  )
}
/*
  Createa  function that maps the following input -> output
  0 -> 0
  1 -> 0
  2 -> 0
  3 -> 0
  4 -> 0
  5 -> 0
  6 -> 0
  7 -> 0
  8 -> 0
  9 -> 0
  10 -> 0
  11 -> 1
  12 -> 2
  13 -> 3
  14 -> 4
  15 -> 5
  16 -> 6
  17 -> 7
  18 -> 8
  19 -> 9
  20 -> 0
  21 -> 0
  22 -> 0
*/

export default function AnimationFilterGt() {
  const {colors} = LoverDark

  const timer = useTimer(300)
  const length = 10
  const step = timer % 20 > 10 ? timer % 10 : 0
  const limit = 5

  const veryBeginning = timer % 20 < 5

  return (
    <div className="flex place-items-center">
      <div className="flex-grow max-w-2xl mx-auto">
        <Window
          colors={colors}
          titleElement={() =>
            animationTitle({
              step,
              length,
              title: 'Filter numbers less than a value',
            })
          }
          footerElement={animationFooter}
        >
          <div>
            <div style={{backgroundColor: ''}} className="whitespace-pre-wrap">
              <span style={{color: '#F8E38D'}}>let</span>
              <span style={{color: '#EEFFFF'}}> numbers</span>
              <span style={{color: '#F8997C'}}> = </span>
              <span className="tracking-tighter ">
                <span style={{color: '#EEFFFF'}}>[</span>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <>
                    {i !== 1 ? (
                      <span style={{color: '#EEFFFF'}}>, </span>
                    ) : null}
                    <span
                      style={{color: 'rgb(246, 177, 208)'}}
                      className="relative "
                    >
                      {i}
                      {step === i ? <Highlight /> : null}
                    </span>
                  </>
                ))}

                <span style={{color: '#EEFFFF'}}>]</span>
              </span>
            </div>

            <div style={{backgroundColor: ''}} className="whitespace-pre-wrap">
              {' '}
            </div>

            <div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>numbers.</span>
                <span style={{color: '#F8E38D'}}>filter</span>
                <span style={{color: '#EEFFFF'}}>(</span>
                <span style={{color: '#F6B1D0'}}>function</span>
                <span style={{color: '#EEFFFF'}}> (i) {'{'}</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}> </span>
                <span style={{color: '#F8997C'}}> return </span>
                <span className="relative">
                  <span className="">
                    {step === 0 ? (
                      <span style={{color: '#EEFFFF'}}>
                        i{veryBeginning ? null : <Highlight />}
                      </span>
                    ) : (
                      <span style={{color: 'rgb(246, 177, 208)'}}>{step}</span>
                    )}
                  </span>
                </span>
                <span style={{color: '#F8997C'}}> &lt; </span>
                <span style={{color: 'rgb(246, 177, 208)'}}>{limit}</span>

                {step === 0 ? null : (
                  <span style={{color: '#68B8ED'}}>
                    {' '}
                    // {step < limit ? 'true' : 'false'}
                  </span>
                )}
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>{'}'}</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              />
            </div>
          </div>

          <div className="absolute bottom-0 right-0 p-4">
            <motion.div
              layoutId="results"
              initial={false}
              transition={spring}
              className="px-4 py-2 text-sm bg-gray-900 rounded-md bg-opacity-80"
            >
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#F8997C'}}>return</span>
                <span style={{color: '#EEFFFF'}}> [</span>

                {step >= 1 || veryBeginning ? (
                  <span
                    style={{color: 'rgb(246, 177, 208)'}}
                    className="relative"
                  >
                    1
                  </span>
                ) : null}
                {[2, 3, 4, 5, 6, 7, 8, 9]
                  .filter((i) => i < limit)
                  .filter((i) => step >= i || veryBeginning)
                  .map((i) => (
                    <>
                      <span style={{color: '#EEFFFF'}}>, </span>
                      <span
                        style={{color: 'rgb(246, 177, 208)'}}
                        className="relative"
                      >
                        {i}
                      </span>
                    </>
                  ))}

                <span style={{color: '#EEFFFF'}}>]</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              />
            </motion.div>
          </div>
        </Window>
      </div>
    </div>
  )
}
