import React, { useState, memo, useEffect } from 'react'
import styled from 'styled-components'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useLocation } from 'react-router-dom'

import BoxLineComponent from './BoxLine'
import Lenguage from '../Lenguage'
import SwitchTheme from './SwitchTheme'

const Header = memo(() => {
  const location = useLocation()

  const isRoot = location.pathname === '/'

  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [affterlimit, setaffterlimit] = useState(false)

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )

  useEffect(() => {
    !isRoot && setaffterlimit(true)
    isRoot && setaffterlimit(false)
  }, [isRoot])

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isRoot) return
      const Limit = (vh / 10) * 9
      const isDown = currPos.y < prevPos.y
      const execcedLimit = Math.abs(currPos.y) > Limit

      if (isDown !== isScrolledDown) setIsScrolledDown(isDown)
      if (execcedLimit !== affterlimit) setaffterlimit(execcedLimit)
    },
    [isScrolledDown, isRoot],
    false,
    false,
    300
  )

  return (
    <HeaderContainer>
      <Container affterlimit={affterlimit}>
        <SwitchTheme />
        <Lenguage affterlimit={affterlimit} />
        <BoxLineComponent affterlimit={!affterlimit} />
      </Container>
    </HeaderContainer>
  )
})

const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 1;
  top: 0;
  transition: all 400ms ease;

  & > * {
    pointer-events: auto;
  }
`

const Container = styled.div`
  background-color: ${({ affterlimit, theme }) =>
    affterlimit ? theme?.colors?.background : 'transparent'};
  transition: all 400ms ease;
`

export default Header
