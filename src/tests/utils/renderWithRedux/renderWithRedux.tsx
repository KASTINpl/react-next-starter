import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { reducer } from 'store/AppStoreProvider'
import { RenderWithReduxType } from './types'
import { configureStore } from '@reduxjs/toolkit'

export const renderWithRedux: RenderWithReduxType = (
  component,
  { initialState, store = configureStore({ reducer, preloadedState: initialState }) }
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
