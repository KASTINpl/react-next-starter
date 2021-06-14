import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from 'store/AppStoreProvider'
import { RenderWithReduxType } from './types'

export const renderWithRedux: RenderWithReduxType = (
  component,
  // todo: remove after bugfix https://github.com/reduxjs/redux/pull/4078
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  { initialState, store = createStore(reducer, initialState) }
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
