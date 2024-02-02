import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContexts'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markActiveCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startedAt),
        )
        if (secondsDifference >= totalSeconds) {
          markActiveCycleAsFinished()

          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markActiveCycleAsFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutesString = String(minutesAmount).padStart(2, '0')
  const secondsString = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer | ${minutesString}:${secondsString}`
    }
  }, [minutesString, secondsString, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutesString[0]}</span>
      <span>{minutesString[1]}</span>
      <Separator>:</Separator>
      <span>{secondsString[0]}</span>
      <span>{secondsString[1]}</span>
    </CountdownContainer>
  )
}
