import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Children } from 'react'
import { theme } from 'ui/AppThemeProvider'

function getCache() {
  const cache = createCache({ key: 'css', prepend: true })
  cache.compat = true
  return cache
}

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href="/favicon.svg" />
          <link rel="mask-icon" href="/favicon.svg" color="#000000" />
          <link rel="apple-touch-icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  const cache = getCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      // Take precedence over the CacheProvider in our custom _app.js
      enhanceComponent: Component =>
        Object.assign(
          props => (
            <CacheProvider value={cache}>
              <Component {...props} />
            </CacheProvider>
          ),
          { displayName: Component.displayName }
        ),
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
  }
}
