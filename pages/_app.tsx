import type { AppProps } from 'next/app'
import React from 'react'
import AppStoreProvider from 'store/AppStoreProvider'
import AppThemeProvider from 'ui/AppThemeProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppStoreProvider>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </AppStoreProvider>
  )
}

export default MyApp
