import { ReactElement } from 'react'
import AppThemeProvider from 'ui/AppThemeProvider'

export const AppThemeDecorator = (Story: () => ReactElement): ReactElement => {
  return (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  )
}
