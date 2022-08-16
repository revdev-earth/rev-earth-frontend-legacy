import React, { Suspense } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { HashRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { ContextProvider } from './context'
import ThemeProvider from './context/theme'
import Loader from './components/Loader'
import useGetData from './hooks/useGetData'
import { useCtx } from './context'

import './css/App.css'
import 'normalize.css'

function App() {
  return (
    <HelmetProvider>
      <ContextProvider>
        <ThemeProvider>
          <Body className='Body'>
            <HelmetComponent />
            <Suspense fallback={<Loader />}>
              <Router>
                <Core />
              </Router>
            </Suspense>
          </Body>
        </ThemeProvider>
      </ContextProvider>
    </HelmetProvider>
  )
}

const Background = React.lazy(() => import('./components/Backgrund'))
const Header = React.lazy(() => import('./components/Header'))
const SwitchRoutes = React.lazy(() => import('./router'))
const Footer = React.lazy(() => import('./components/Footer'))

const Core = () => {
  const {
    state: { lenguage }
  } = useCtx()
  const data = useGetData(lenguage)

  return (
    <>
      <Background />

      <Header />
      {/* Aqui poner el rooter */}
      <SwitchRoutes data={data} />
      {/* <Content /> */}
      <Footer />
    </>
  )
}

const HelmetComponent = () => {
  const {
    state: { lenguage, theme }
  } = useCtx()

  return (
    <Helmet>
      {/* html attributes */}
      <html lang={lenguage} amp />
      {/* body attributes */}
      <body className={`root ${theme}`} />
      <meta charSet='utf-8' />
      {/* title attributes and value */}
      <title itemProp='name' lang={lenguage}>
        {`Rev Earth`}
      </title>
      {/* noscript elements */}
      <noscript>{`<link rel="stylesheet" type="text/css" href="foo.css" />`}</noscript>
    </Helmet>
  )
}

const Body = styled.div`
  color: ${({ theme }) => theme?.colors?.text};

  a {
    color: ${({ theme }) => theme?.colors?.link?.default};

    &:hover,
    &:active {
      color: ${({ theme }) => theme?.colors?.link?.hover};
    }
  }
`

export default App
