import { createTheme } from '@mui/material/styles'
import '@fontsource/roboto'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#03A9F4',
      dark: '#0288D1',
      light: '#B3E5FC',
    },
    secondary: {
      main: '#607D8B',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
})
