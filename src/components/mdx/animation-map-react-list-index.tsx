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
export default function Map() {
  const {colors} = LoverDark

  const timer = useTimer(2000)
  const length = 4
  const step = timer % length

  return (
    <div className="flex place-items-center">
      <div className="flex-grow max-w-2xl mx-auto">
        <Window
          colors={colors}
          titleElement={() =>
            animationTitle({
              step,
              length,
              title: 'Map a string to an indexed list item',
            })
          }
          footerElement={animationFooter}
        >
          <div>
            <div style={{backgroundColor: ''}} className="whitespace-pre-wrap">
              <span style={{color: '#F8E38D'}}>const</span>
              <span style={{color: '#EEFFFF'}}> names</span>
              <span style={{color: '#F8997C'}}> = </span>
              <span style={{color: '#EEFFFF'}}>[</span>

              <span style={{color: '#9EE9A7'}} className="relative">
                'Alice'
                {step === 1 ? <Highlight /> : null}
              </span>

              <span style={{color: '#EEFFFF'}}>,</span>
              <span style={{color: '#9EE9A7'}} className="relative">
                'Betty'
                {step === 2 ? <Highlight /> : null}
              </span>
              <span style={{color: '#EEFFFF'}}>,</span>
              <span style={{color: '#9EE9A7'}} className="relative">
                'Carol'
                {step === 3 ? <Highlight /> : null}
              </span>
              <span style={{color: '#EEFFFF'}}>]</span>
            </div>

            <div style={{backgroundColor: ''}} className="whitespace-pre-wrap">
              {' '}
            </div>

            <div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>&lt;</span>
                <span style={{color: '#AFE8FF'}}>ul</span>
                <span style={{color: '#EEFFFF'}}>&gt;</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>{'  '}</span>
                <span style={{color: '#AFE8FF'}}>{'{'}</span>
                <span style={{color: '#EEFFFF'}}>names.</span>
                <span style={{color: '#F8E38D'}}>map</span>
                <span style={{color: '#EEFFFF'}}>((name, i) </span>
                <span style={{color: '#F6B1D0'}}>=&gt;</span>
                <span style={{color: '#EEFFFF'}}> (</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>{'    '}&lt;</span>
                <span style={{color: '#AFE8FF'}}>li</span>
                <span style={{color: '#EEFFFF'}}>&gt; </span>
                <span className="relative">
                  <span style={{color: '#AFE8FF'}}>{'{'}</span>
                  {step === 0 ? (
                    <span style={{color: '#EEFFFF', top: '-1px'}}>i</span>
                  ) : step === 1 ? (
                    <span style={{color: '#F6B1D0'}}>0</span>
                  ) : step === 2 ? (
                    <span style={{color: '#F6B1D0'}}>1</span>
                  ) : step === 3 ? (
                    <span style={{color: '#F6B1D0'}}>2</span>
                  ) : (
                    ''
                  )}

                  <span style={{color: '#AFE8FF'}}>{'}'}</span>
                  <span style={{color: '#EEFFFF'}}>: </span>

                  <span style={{color: '#AFE8FF'}}>{'{'}</span>
                  {step === 0 ? (
                    <span style={{color: '#EEFFFF', top: '-1px'}}>
                      {' '}
                      name <Highlight />
                    </span>
                  ) : step === 1 ? (
                    <span style={{color: '#9EE9A7'}}>'Alice'</span>
                  ) : step === 2 ? (
                    <span style={{color: '#9EE9A7'}}>'Betty'</span>
                  ) : step === 3 ? (
                    <span style={{color: '#9EE9A7'}}>'Carol'</span>
                  ) : (
                    ''
                  )}
                </span>
                <span style={{color: '#AFE8FF'}}>{'}'}</span>
                <span style={{color: '#EEFFFF'}}> &lt;/</span>
                <span style={{color: '#AFE8FF'}}>li</span>
                <span style={{color: '#EEFFFF'}}>&gt;</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>{'  '}))</span>
                <span style={{color: '#AFE8FF'}}>{'}'}</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>&lt;/</span>
                <span style={{color: '#AFE8FF'}}>ul</span>
                <span style={{color: '#EEFFFF'}}>&gt;</span>
              </div>
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
                <span style={{color: '#EEFFFF'}}>{'<'}</span>
                <span style={{color: '#AFE8FF'}}>ul</span>
                <span style={{color: '#EEFFFF'}}>{'>'}</span>

                {step === 0 ? (
                  <>
                    <span style={{color: '#EEFFFF'}}>{'</'}</span>
                    <span style={{color: '#AFE8FF'}}>ul</span>
                    <span style={{color: '#EEFFFF'}}>{'>'}</span>
                  </>
                ) : null}
              </div>
              {step >= 1 ? (
                <div
                  style={{backgroundColor: ''}}
                  className="whitespace-pre-wrap"
                >
                  <span style={{color: '#EEFFFF'}}>
                    {'  '}
                    {'<'}
                  </span>
                  <span style={{color: '#AFE8FF'}}>li</span>
                  <span style={{color: '#EEFFFF'}}>{'>0: Alice</'}</span>
                  <span style={{color: '#AFE8FF'}}>li</span>
                  <span style={{color: '#EEFFFF'}}>{'>'}</span>
                </div>
              ) : null}
              {step >= 2 ? (
                <div
                  style={{backgroundColor: ''}}
                  className="whitespace-pre-wrap"
                >
                  <span style={{color: '#EEFFFF'}}>
                    {'  '}
                    {'<'}
                  </span>
                  <span style={{color: '#AFE8FF'}}>li</span>
                  <span style={{color: '#EEFFFF'}}>{'>1: Betty</'}</span>
                  <span style={{color: '#AFE8FF'}}>li</span>
                  <span style={{color: '#EEFFFF'}}>{'>'}</span>
                </div>
              ) : null}
              {step >= 3 ? (
                <div
                  style={{backgroundColor: ''}}
                  className="whitespace-pre-wrap"
                >
                  <span style={{color: '#EEFFFF'}}>
                    {'  '}
                    {'<'}
                  </span>
                  <span style={{color: '#AFE8FF'}}>li</span>
                  <span style={{color: '#EEFFFF'}}>{'>2: Carol</'}</span>
                  <span style={{color: '#AFE8FF'}}>li</span>
                  <span style={{color: '#EEFFFF'}}>{'>'}</span>
                </div>
              ) : null}
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                {step !== 0 ? (
                  <>
                    <span style={{color: '#EEFFFF'}}>{'</'}</span>
                    <span style={{color: '#AFE8FF'}}>ul</span>
                    <span style={{color: '#EEFFFF'}}>{'>'}</span>
                  </>
                ) : null}
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
