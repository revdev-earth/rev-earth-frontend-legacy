import React from 'react'
import styled from 'styled-components'
import Switch from '../common/Switch'
import { useCtx } from '../../context'

export default () => {
  const {
    state: { theme },
    dispatch
  } = useCtx()

  const switchTheme = element => {
    let typeTheme = 'light'

    if (element.target.checked) {
      typeTheme = 'dark'
    } else {
      typeTheme = 'light'
    }
    dispatch({ type: 'SET_THEME', payload: typeTheme })
  }

  let themeActive = theme === 'dark'

  return (
    <Container>
      <Switch onChange={switchTheme} cheked={themeActive} />
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  padding: 0.5rem;
`
