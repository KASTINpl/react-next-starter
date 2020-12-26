import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { theme } from './theme'

export const AppThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
