import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { FC } from 'react'

export const WindowProgressBar: FC = () => {
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', pointerEvents: 'none', zIndex: '9999' }}>
      <LinearProgress />
    </Box>
  )
}
