import { combineReducers } from '@reduxjs/toolkit'
import { sessionSlice } from '../session/slice'

export const reducer = combineReducers({
  session: sessionSlice.reducer,
})
