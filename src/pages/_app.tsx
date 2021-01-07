import WindowProgressBar from 'components/WindowProgressBar'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AppStoreProvider from 'store/AppStoreProvider'
import AppThemeProvider from 'ui/AppThemeProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const [showProgressBar, setShowProgressBar] = useState<boolean>(false)

  React.useEffect(() => {
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
    <AppStoreProvider>
      <AppThemeProvider>
        {showProgressBar && <WindowProgressBar />}
        <Component {...pageProps} />
      </AppThemeProvider>
    </AppStoreProvider>
  )
}

export default MyApp
