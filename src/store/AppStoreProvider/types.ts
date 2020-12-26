import { reducer } from './reducer'
import { store } from './store'

export type AppState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export interface ActionSelector<ReducerName extends keyof AppState, PropertyName extends keyof AppState[ReducerName]> {
  // eslint-disable-next-line no-unused-vars
  (store: AppState): AppState[ReducerName][PropertyName]
}
