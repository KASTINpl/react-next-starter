import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
