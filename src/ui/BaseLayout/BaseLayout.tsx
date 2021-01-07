import { useTheme } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import { BaseLayoutProps } from './types'

export const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
