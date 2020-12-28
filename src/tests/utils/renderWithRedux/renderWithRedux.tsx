import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from 'store/AppStoreProvider'
import { RenderWithReduxType } from './types'

export const renderWithRedux: RenderWithReduxType = (
  component,
  { initialState, store = createStore(reducer, initialState) }
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
