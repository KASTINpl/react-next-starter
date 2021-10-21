import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import React from 'react'

export const WindowProgressBar: React.FC = () => {
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', pointerEvents: 'none', zIndex: '9999' }}>
      <LinearProgress />
    </Box>
  )
}
