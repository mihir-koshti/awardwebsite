import '@/styles/globals.css'
import { lightTheme } from '@/utils/theme'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
