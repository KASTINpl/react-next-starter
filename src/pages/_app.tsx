import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import WindowProgressBar from 'components/WindowProgressBar'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import AppStoreProvider from 'store/AppStoreProvider'
import AppThemeProvider from 'ui/AppThemeProvider'

const cache = createCache({ key: 'css', prepend: true })
cache.compat = true

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    const showProgressBar = () => setShowProgressBar(true)
    const hideProgressBar = () => setShowProgressBar(false)

    router.events.on('routeChangeStart', showProgressBar)
    router.events.on('routeChangeComplete', hideProgressBar)
    router.events.on('routeChangeError', hideProgressBar)

    return () => {
      router.events.off('routeChangeStart', showProgressBar)
      router.events.off('routeChangeComplete', hideProgressBar)
      router.events.off('routeChangeError', hideProgressBar)
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <AppStoreProvider>
        <AppThemeProvider>
          {showProgressBar && <WindowProgressBar />}
          <Component {...pageProps} />
        </AppThemeProvider>
      </AppStoreProvider>
    </CacheProvider>
  )
}

export default MyApp
