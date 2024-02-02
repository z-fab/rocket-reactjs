import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_CYCLE = 'ADD_CYCLE',
  INTERRUPT = 'INTERRUPT',
  MARK_CYCLE_AS_FINISHED = 'MARK_CYCLE_AS_FINISHED',
}

export function addCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptAction(activeCycleId: string | null) {
  return {
    type: ActionTypes.INTERRUPT,
    payload: {
      activeCycleId,
    },
  }
}

export function markCycleAsFinishedAction(activeCycleId: string | null) {
  return {
    type: ActionTypes.MARK_CYCLE_AS_FINISHED,
    payload: {
      activeCycleId,
    },
  }
}
