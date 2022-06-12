import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { FC } from 'react'
import BoxLayout from 'ui/BoxLayout'

const NotFound: FC = () => {
  const router = useRouter()
  return (
    <BoxLayout title="Page not found">
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h4">404 - Page not found</Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="outlined" onClick={() => router.push('/')}>
                Go to homepage
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </BoxLayout>
  )
}

export default NotFound
