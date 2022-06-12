import { ReactElement } from 'react'
import AppStoreProvider from 'store/AppStoreProvider'

export const AppStoreDecorator = (Story: () => ReactElement): ReactElement => {
  return (
    <AppStoreProvider>
      <Story />
    </AppStoreProvider>
  )
}
