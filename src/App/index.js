import React, { Suspense, useContext } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { HashRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { ContextProvider, Context } from './context'
import initialContext from './utils/initialContext'
import ThemeProvider from './context/theme'
import Loader from './components/Loader'
import useGetData from './hooks/useGetData'

import './css/App.css'
import 'normalize.css'

function App() {
  const initial = initialContext()

  return (
    <HelmetProvider>
      <ContextProvider initial={initial}>
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

const Header = React.lazy(() => import('./components/Header'))
const SwitchRoutes = React.lazy(() => import('./router'))
const Footer = React.lazy(() => import('./components/Footer'))

const Core = () => {
  const {
    context: { lenguage }
  } = useContext(Context)
  const data = useGetData(lenguage)
  return (
    <>
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
    context: { lenguage, theme }
  } = useContext(Context)

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
