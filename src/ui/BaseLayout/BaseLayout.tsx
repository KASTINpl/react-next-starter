import { useTheme } from '@mui/material/styles'
import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { BaseLayoutProps } from './types'

export const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({ title, children }) => {
  const theme = useTheme()

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
