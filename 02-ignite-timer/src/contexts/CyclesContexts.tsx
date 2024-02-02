import { createContext, useEffect, useReducer, useState } from 'react'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  addCycleAction,
  interruptAction,
  markCycleAsFinishedAction,
} from '../reducers/cycles/action'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markActiveCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptActiveCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: React.ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedCyclesState = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedCyclesState) {
        return JSON.parse(storedCyclesState)
      }

      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    return activeCycle
      ? differenceInSeconds(new Date(), new Date(activeCycle.startedAt))
      : 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markActiveCycleAsFinished() {
    dispatch(markCycleAsFinishedAction(activeCycleId))
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startedAt: new Date(),
    }

    dispatch(addCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptActiveCycle() {
    dispatch(interruptAction(activeCycleId))
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markActiveCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptActiveCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
