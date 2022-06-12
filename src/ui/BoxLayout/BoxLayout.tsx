import Box from '@mui/material/Box'
import { FC, PropsWithChildren } from 'react'
import BaseLayout from '../BaseLayout'
import { BoxLayoutProps } from './types'

export const BoxLayout: FC<PropsWithChildren<BoxLayoutProps>> = ({ title, children }) => {
  return (
    <BaseLayout title={title}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>{children}</Box>
    </BaseLayout>
  )
}
