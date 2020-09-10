import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Intro from './Intro'

const Content = () => {
  return (
    <>
      <Intro 
        title="Rev Earth" />
        <ContainerSections>
          <Section
            title="Section 1"
            text="Acompañando a la seccion 1"
            position="left" />
          <Section
            title="Section 2" 
            text="Acompañando a la seccion 2"
            position="right" />
          <Section
            title="Section 3" 
            text="Acompañando a la seccion 3"
            position="center" />
        </ContainerSections>
    </>
  )
}

const ContainerSections = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Content