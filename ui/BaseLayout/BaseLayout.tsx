import { Alert } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
import { getSessionStatus } from 'store/session'
import { BaseLayoutProps } from './types'

export const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  const status = useSelector(getSessionStatus)
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{title}</title>
      </Head>
      {children}
      <Alert security="success">{status}</Alert>
    </>
  )
}
