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
      className="absolute inset-0 px-2 py-1 -mx-2 -my-1 text-center bg-blue-500 rounded"
      // style={{zIndex: -1}}
      initial={false}
      transition={spring}
    >
      {value}
    </motion.div>
  )
}

export default function AnimationReduceSum() {
  const {colors} = LoverDark

  const RELEASE_TIME = 5
  const timer = useTimer(400)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const length = numbers.length * 3
  const step = timer % (length + RELEASE_TIME)

  return (
    <div className="flex place-items-center">
      <div className="flex-grow max-w-2xl mx-auto">
        <Window
          colors={colors}
          titleElement={() =>
            animationTitle({
              step: Math.floor(step / 3),
              length: Math.floor(length / 3) + 1,
              title: 'Sum an array with Reduce',
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
                      {step === i * 3 ? (
                        <Highlight
                          value={number}
                          layoutId={String(Math.floor((step + 0) / 3))}
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
                <span style={{color: '#EEFFFF'}}>(sum, number)</span>
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
                        sum
                        {step !== 0 && step <= length ? (
                          <Highlight layoutId="abcdefg" value="0" />
                        ) : null}
                      </span>
                    ) : (
                      <span style={{color: 'rgb(246, 177, 208)'}}>
                        {numbers
                          .slice(0, Math.floor((step + 1) / 3))
                          .reduce((sum, number) => sum + number, 0)}

                        {step % 3 === 2 ? (
                          <Highlight
                            layoutId={String(Math.floor((step + 0) / 3))}
                            value={numbers
                              .slice(0, Math.floor(step / 3) + 1)
                              .reduce((sum, number) => sum + number, 0)}
                          />
                        ) : null}
                      </span>
                    )}
                  </span>
                </span>
                <span style={{color: '#F8997C'}}> + </span>
                <span className="relative">
                  <span className="">
                    {step === 0 || step > length ? (
                      <span style={{color: '#EEFFFF'}}>number</span>
                    ) : (
                      <span style={{color: 'rgb(246, 177, 208)'}}>
                        {numbers[Math.floor((step + 1) / 3) - 1] || 0}
                        {step % 3 === 0 || step > length ? null : (
                          <Highlight
                            layoutId={String(Math.floor((step + 0) / 3))}
                            value={numbers[Math.floor((step + 1) / 3)]}
                          />
                        )}
                      </span>
                    )}
                  </span>
                </span>
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
                    {numbers.reduce((sum, number) => sum + number, 0)}
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
