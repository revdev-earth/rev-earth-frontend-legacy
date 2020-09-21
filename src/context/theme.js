import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { Context } from '../context'

/** Return './.theme.json' || {} */
const getLocalTheme = theme => {
  // switch into ligth or dark
  let themeFile = {}
  try {
    themeFile = require('../static/theme.json')
  } catch (err) {
    themeFile = {}
  }

  switch (theme) {
    case 'light':
      return themeFile.light
    case 'dark':
      return themeFile.dark
    default:
      return themeFile.light
  }
}

const ThemeProvider = ({ children }) => {
  const theme = useTheme()
  return <Provider theme={theme || {}}>{children}</Provider>
}

const useTheme = () => {
  const {
    context: { theme: themeContext }
  } = useContext(Context)

  const [theme, setTheme] = useState({})

  useEffect(() => {
    setTheme(getLocalTheme(themeContext))
  }, [themeContext])

  return theme
}

export default ThemeProvider
