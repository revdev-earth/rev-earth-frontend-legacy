import React, { Suspense } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import styled from 'styled-components'
import { ContextProvider } from './context'
import initialContext from './utils/initialContext'
import ThemeProvider from './context/theme'
import Loader from './components/Loader'
import { BrowserRouter as Router } from 'react-router-dom'

import useGetData from './hooks/useGetData'

import './css/App.css'
import 'normalize.css'

const Header = React.lazy(() => import('./components/Header'))
// const Content = React.lazy(() => import('./components/Content'))
const SwitchRoutes = React.lazy(() => import('./router'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  const data = useGetData()
  return (
    <HelmetProvider>
      <ContextProvider initial={initialContext() || {}}>
        <ThemeProvider>
          <Body className='Body'>
            <HelmetComponent />
            <Suspense fallback={<Loader />}>
              <Router>
                <Header />
                {/* Aqui poner el rooter */}
                <SwitchRoutes data={data} />
                {/* <Content /> */}
                <Footer />
              </Router>
            </Suspense>
          </Body>
        </ThemeProvider>
      </ContextProvider>
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

const Body = styled.div`
  background-color: ${({ theme }) => theme?.colors?.background};
`

export default App
