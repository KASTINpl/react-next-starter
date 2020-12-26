import { Box, Button, Container, Paper, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import BoxLayout from 'ui/BoxLayout'

const NotFound: React.FC = () => {
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
