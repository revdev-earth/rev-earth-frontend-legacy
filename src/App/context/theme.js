import React, { useEffect, useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { useCtx } from '.'

// Get local file theme to be used by provider
/** Return './.theme.json' || {} */
const getLocalTheme = mode => {
  // switch into ligth or dark
  let themeJSON = {}

  try {
    themeJSON = require('../static/theme.json')
  } catch (err) {
    console.warn('No theme json in static.')
  }

  let theme_mode

  switch (mode) {
    case 'light':
      theme_mode = themeJSON.light
      break
    case 'dark':
      theme_mode = themeJSON.dark
      break
    default:
      theme_mode = themeJSON.light
      break
  }

  return {
    ...theme_mode,
    mode
  }
}

// useTheme return theme

const useTheme = () => {
  const {
    state: { theme: theme_name }
  } = useCtx()

  const [theme, setTheme] = useState({})

  useEffect(() => {
    setTheme(getLocalTheme(theme_name))
  }, [theme_name])

  return theme
}

// Provider

const ThemeProvider = ({ children }) => {
  const theme = useTheme()
  console.log('theme provider', theme)
  return <Provider theme={theme}>{children}</Provider>
}

export default ThemeProvider
