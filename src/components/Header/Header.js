import React, { useState, useContext, memo} from "react"
import { ThemeContext } from "styled-components"
import styled from 'styled-components'
import BoxLineComponent from './BoxLine'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
const Header = memo(() => {
  const theme = useContext(ThemeContext)
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [passedLimit, setPassedLimit] = useState(false)

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const Limit = ((vh / 10) * 9)
      const isDown = currPos.y < prevPos.y
      const execcedLimit = Math.abs(currPos.y) > Limit

      if (isDown !== isScrolledDown) setIsScrolledDown(isDown)
      if (execcedLimit !== passedLimit) setPassedLimit(execcedLimit)
    },
    [isScrolledDown],
    false,
    false,
    300
  )

  return (
    <HeaderContainer>
      <Container
        theme={theme}
        shouldChangeStyle={passedLimit && !isScrolledDown}
        passedLimit={passedLimit} >

        <BoxLineComponent 
          shouldChangeStyle={!passedLimit} />

      </Container>
    </HeaderContainer>
  )
})

const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 1;
  overflow: hidden;

  & > * {
    pointer-events: auto;
  }
`;


const Container = styled.div`
  ${ props => props.default};
  ${ props => props.passedLimit && props.passedLimitStyle};
  ${ props => props.shouldChangeStyle && props.active };
  transition: all 0.3s ease-in-out 0.3s;
`;

Container.defaultProps = {
  default: {
    backgroundColor: 'transparent',
    top: "auto"
  },
  passedLimitStyle: {
    backgroundColor:  'rgba(255,255,255,0.5)'
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0px 1px 10px 0px rgb(0, 30, 80)',
    top: "-100vw"
  }
  
}




export default Header;
