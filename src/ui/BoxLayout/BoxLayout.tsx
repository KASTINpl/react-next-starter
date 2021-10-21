import Box from '@mui/material/Box'
import React from 'react'
import BaseLayout from '../BaseLayout'
import { BoxLayoutProps } from './types'

export const BoxLayout: React.FC<BoxLayoutProps> = ({ title, children }) => {
  return (
    <BaseLayout title={title}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>{children}</Box>
    </BaseLayout>
  )
}
