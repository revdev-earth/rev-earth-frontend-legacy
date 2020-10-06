import React, { Suspense, useContext } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { ContextProvider, Context } from './context'
import initialContext from './utils/initialContext'
import ThemeProvider from './context/theme'
import Loader from './components/Loader'
import useGetData from './hooks/useGetData'

import './css/App.css'
import 'normalize.css'

const Header = React.lazy(() => import('./components/Header'))
const SwitchRoutes = React.lazy(() => import('./router'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  const data = useGetData()
  const initial = initialContext()

  return (
    <HelmetProvider>
      <ContextProvider initial={initial}>
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

const HelmetComponent = () => {
  const {
    context: { lenguage }
  } = useContext(Context)

  return (
    <Helmet>
      {/* html attributes */}
      <html lang={lenguage} amp />
      {/* body attributes */}
      <body className='root' />
      <meta charSet='utf-8' />
      {/* title attributes and value */}
      <title itemProp='name' lang={`en`}>
        {`Rev Earth`}
      </title>
      {/* noscript elements */}
      <noscript>{`<link rel="stylesheet" type="text/css" href="foo.css" />`}</noscript>
    </Helmet>
  )
}

const Body = styled.div`
  background-color: ${({ theme }) => theme?.colors?.background};
`

export default App
