import React from 'react'

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

function Highlight({value, layoutId = 'outline'}) {
  return (
    <motion.div
      layoutId={layoutId}
      className="absolute inset-0 flex items-center justify-center px-2 py-1 -mx-2 -my-1 text-center bg-blue-500 rounded"
      // style={{zIndex: -1}}
      initial={false}
      transition={spring}
    >
      {value}
    </motion.div>
  )
}

const generateNumbers = () =>
  Array(6)
    .fill(undefined)
    .map(() => Math.floor(Math.random() * 20))

export default function AnimationReduceSum() {
  const {colors} = LoverDark
  const [numbers, setNumbers] = React.useState(generateNumbers)

  /** Number of steps after the animation completes before it restarts */
  const RELEASE_TIME = 5
  /** Number of frames between steps */
  const FRAMES = 4
  const timer = useTimer(400)
  // const numbers = [1, 2, 3, 7, 4, 5, 6, 8, 9]
  const length = numbers.length * FRAMES
  const step = timer % (length + RELEASE_TIME)

  React.useEffect(() => {
    if (step === 0) {
      setNumbers(generateNumbers)
    }
  }, [step])

  function keyframeAt(frame) {
    return Math.floor((step + frame) / FRAMES)
  }
  const frame = step % FRAMES
  const keyframe = keyframeAt(0)

  return (
    <div className="flex place-items-center">
      <div className="flex-grow max-w-2xl mx-auto">
        <Window
          colors={colors}
          titleElement={() =>
            animationTitle({
              step: keyframeAt(0),
              length: Math.floor(length / FRAMES) + 1,
              title: 'Find the greatest value with reduce',
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

                {numbers.map((number, i) => (
                  <>
                    {i !== 0 ? (
                      <span style={{color: '#EEFFFF'}}>, </span>
                    ) : null}
                    <span
                      style={{color: 'rgb(246, 177, 208)'}}
                      className="relative "
                    >
                      {number}
                      {step === i * FRAMES ? (
                        <Highlight
                          value={number}
                          layoutId={String(keyframeAt(0))}
                        />
                      ) : null}
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
                <span style={{color: '#F8E38D'}}>reduce</span>
                <span style={{color: '#EEFFFF'}}>(</span>
                <span style={{color: '#EEFFFF'}}>(max, number)</span>
                <span style={{color: 'rgb(246, 177, 208)'}}> ={'>'} </span>
                <span style={{color: '#EEFFFF'}}>{'{'}</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}> </span>
                <span style={{color: '#F8997C'}}> return </span>
                <span className="relative">
                  <span className="">
                    {step <= 1 || step > length ? (
                      <span style={{color: '#EEFFFF'}}>
                        max
                        {step !== 0 && step <= length ? (
                          <Highlight layoutId="abcdefg" value="0" />
                        ) : null}
                      </span>
                    ) : (
                      <span style={{color: 'rgb(246, 177, 208)'}}>
                        {numbers
                          .slice(0, keyframeAt(0))
                          .reduce((max, number) => Math.max(max, number), 0)}
                        {frame === 3 ? (
                          <Highlight
                            layoutId={String(keyframeAt(0))}
                            value={numbers
                              .slice(0, keyframeAt(2))
                              .reduce(
                                (max, number) => Math.max(max, number),
                                0,
                              )}
                          />
                        ) : null}
                      </span>
                    )}
                  </span>
                </span>
                <span style={{color: '#F8997C'}}> &gt; </span>
                <span className="relative">
                  <span className="">
                    {step === 0 || step > length ? (
                      <span style={{color: '#EEFFFF'}}>number</span>
                    ) : (
                      <span style={{color: 'rgb(246, 177, 208)'}}>
                        {numbers[keyframeAt(2) - 1] || 0}
                        {frame === 0 || step > length ? null : (
                          <Highlight
                            layoutId={String(keyframeAt(0))}
                            value={numbers[Math.floor((step + 1) / FRAMES)]}
                          />
                        )}
                      </span>
                    )}
                  </span>
                </span>
                <div
                  style={{backgroundColor: ''}}
                  className="whitespace-pre-wrap"
                >
                  <span style={{color: '#F8997C'}}>{'    '}? </span>
                  <span style={{color: '#EEFFFF'}} className="relative">
                    max
                    {frame === 2 &&
                    numbers
                      .slice(0, keyframeAt(0))
                      .reduce((max, number) => Math.max(max, number), 0) >=
                      numbers[keyframeAt(2) - 1] ? (
                      <Highlight
                        layoutId={String(keyframeAt(0))}
                        value={numbers
                          .slice(0, keyframeAt(0))
                          .reduce((max, number) => Math.max(max, number), 0)}
                      />
                    ) : null}
                  </span>
                </div>
                <div
                  style={{backgroundColor: ''}}
                  className="whitespace-pre-wrap"
                >
                  <span style={{color: '#F8997C'}}>{'    '}: </span>
                  <span style={{color: '#EEFFFF'}} className="relative">
                    number
                    {frame === 2 &&
                    numbers
                      .slice(0, keyframeAt(0))
                      .reduce((max, number) => Math.max(max, number), 0) <
                      numbers[keyframeAt(2) - 1] ? (
                      <Highlight
                        layoutId={String(keyframeAt(0))}
                        value={numbers[keyframeAt(2) - 1] || 0}
                      />
                    ) : null}
                  </span>
                </div>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              >
                <span style={{color: '#EEFFFF'}}>{'}'}, </span>
                <span
                  style={{color: 'rgb(246, 177, 208)'}}
                  className="relative"
                >
                  0
                  {step === 0 ? (
                    <Highlight layoutId="abcdefg" value="0" />
                  ) : null}
                </span>
                <span style={{color: '#EEFFFF'}}>)</span>
              </div>
              <div
                style={{backgroundColor: ''}}
                className="whitespace-pre-wrap"
              />
            </div>
          </div>

          {step >= length ? (
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
                  <span style={{color: '#F8997C'}}>return </span>
                  <span style={{color: 'rgb(246, 177, 208)'}}>
                    {numbers.reduce((max, number) => Math.max(max, number, 0))}
                  </span>
                </div>
                <div
                  style={{backgroundColor: ''}}
                  className="whitespace-pre-wrap"
                />
              </motion.div>
            </div>
          ) : null}
        </Window>
      </div>
    </div>
  )
}
