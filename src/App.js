import React, { Suspense } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import styled, { ThemeProvider } from 'styled-components'
import { ContextProvider } from './context'
import initialContext from './utils/initialContext'

import './css/App.css'
import 'normalize.css'

/** Return './.theme.json' || {} */
const getLocalTheme = () => {
  try {
    return require('./static/theme.json')
  } catch (err) {
    return {}
  }
}

const Header = React.lazy(() => import('./components/Header'))
const Content = React.lazy(() => import('./components/Content'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={getLocalTheme() || {}}>
        <ContextProvider initial={initialContext() || {}}>
          <Body className='Body'>
            <HelmetComponent />
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <Content />
              <Footer />
            </Suspense>
          </Body>
        </ContextProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

const HelmetComponent = () => (
  <Helmet>
    {/* html attributes */}
    <html lang={`en`} amp />
    {/* body attributes */}
    <body className='root' />
    <meta charSet='utf-8' />
    {/* title attributes and value */}
    <title itemProp='name' lang={`en`}>
      {`Rev Earth`}
    </title>
    {/* noscript elements */}
    <noscript>{`
          <link rel="stylesheet" type="text/css" href="foo.css" />
        `}</noscript>
  </Helmet>
)

const Body = styled.div``

export default App
