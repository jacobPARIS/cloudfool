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

export default function AnimationFilterBoolean() {
  const {colors} = LoverDark

  const timer = useTimer(300)
  const cases = [1, NaN, 0, true, false, 25]
  const length = cases.length + 1
  const step = timer % (length * 2) > length ? timer % length : 0
  const limit = 6

  const veryBeginning = timer % (length * 2) < length / 2

  return (
    <div className="flex place-items-center">
      <div className="flex-grow max-w-2xl mx-auto">
        <Window
          colors={colors}
          titleElement={() =>
            animationTitle({
              step,
              length,
              title: 'Remove falsy values with filter',
            })
          }
          footerElement={animationFooter}
        >
          <div>
            <div style={{backgroundColor: ''}} className="whitespace-pre-wrap">
              <span style={{color: '#F8E38D'}}>let</span>
              <span style={{color: '#EEFFFF'}}> cases</span>
              <span style={{color: '#F8997C'}}> = </span>
              <span className="tracking-tighter ">
                <span style={{color: '#EEFFFF'}}>[</span>

                {cases.map((predicate, i) => (
                  <>
                    {i !== 0 ? (
                      <span style={{color: '#EEFFFF'}}>, </span>
                    ) : null}
                    <span
                      style={{color: 'rgb(246, 177, 208)'}}
                      className="relative "
                    >
                      {String(predicate)}
                      {step === i + 1 ? <Highlight /> : null}
                    </span>
                  </>
                ))}
                <span style={{color: '#EEFFFF'}}>]</span>
              </span>
            </div>

            <div style={{backgroundColor: ''}} className="whitespace-pre-wrap">
              {' '}
            </div>

            <div style={{backgroundColor: ''}} className="whitespace-pre-wrap">
              <span style={{color: '#68B8ED'}}>// cases.filter(Boolean)</span>
            </div>

            <div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>cases.</span>
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
                <span style={{color: '#9EE9A7'}}>Boolean</span>
                <span style={{color: '#EEFFFF'}}>(</span>

                <span className="relative">
                  <span className="">
                    {step === 0 ? (
                      <span style={{color: '#EEFFFF'}}>
                        i{veryBeginning ? null : <Highlight />}
                      </span>
                    ) : (
                      <span style={{color: 'rgb(246, 177, 208)'}}>
                        {String(cases[step - 1])}
                      </span>
                    )}
                  </span>
                </span>
                <span style={{color: '#EEFFFF'}}>)</span>

                {step === 0 ? null : (
                  <span style={{color: '#68B8ED'}}>
                    {step === 1
                      ? '    '
                      : step === 2
                      ? '  '
                      : step === 3
                      ? '    '
                      : step === 4
                      ? ' '
                      : step === 5
                      ? ''
                      : step === 6
                      ? '   '
                      : null}
                    // {Boolean(cases[step - 1]) ? 'true' : 'false'}
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

                {cases
                  .filter((_, i) => step > i || veryBeginning)
                  .filter(Boolean)
                  .map((item, i) => (
                    <>
                      {i > 0 ? (
                        <span style={{color: '#EEFFFF'}}>, </span>
                      ) : null}
                      <span
                        style={{color: 'rgb(246, 177, 208)'}}
                        className="relative"
                      >
                        {String(item)}
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
