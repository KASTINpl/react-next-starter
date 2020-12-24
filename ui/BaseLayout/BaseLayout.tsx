import { CssBaseline } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import AppThemeProvider from 'ui/AppThemeProvider'
import { BaseLayoutProps } from './types'

export const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{title}</title>
      </Head>
      {children}
    </AppThemeProvider>
  )
}
