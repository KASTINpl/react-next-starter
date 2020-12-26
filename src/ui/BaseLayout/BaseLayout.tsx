import Head from 'next/head'
import React from 'react'
import { BaseLayoutProps } from './types'

export const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
