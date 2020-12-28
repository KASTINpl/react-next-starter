import { RenderResult } from '@testing-library/react'
import React from 'react'
import { Store } from 'redux'
import { AppState } from 'store/AppStoreProvider'

export interface RenderResultStore extends RenderResult {
  store: Store
}

export interface RenderWithReduxType {
  (
    component: React.ReactNode,
    props?: {
      initialState: AppState
      store?: Store
    }
  ): RenderResultStore
}
