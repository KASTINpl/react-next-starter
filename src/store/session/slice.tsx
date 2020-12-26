import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SessionState } from './types'

const initialState: SessionState = { status: 'ANONYMOUS' }

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessionId: (state, action: PayloadAction<SessionState['id']>) => {
      state.id = action.payload
    },
    setSessionStatus: (state, action: PayloadAction<SessionState['status']>) => {
      state.status = action.payload
    },
  },
})
