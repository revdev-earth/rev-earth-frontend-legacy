import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Intro from './Intro'
import Image1 from '../../static/images/milky.jpg'


const Content = () => {
  return (
    <>
      <Intro 
        title="Rev Earth"
        animation="zoom-out"
        img={Image1} />
        <ContainerSections>
          <Section
            colsA="16"
            title="Section 1"
            text="Acompañando a la seccion 1"
            position="left"
            animation="fade-right"
            img={Image1} />
          <Section
            colsB="16"
            title="Section 2" 
            text="Acompañando a la seccion 2"
            position="right"
            animation="fade-left"
            img={Image1} />
          <Section
            title="Section 3" 
            text="Acompañando a la seccion 3"
            position="down"
            animation="fade-up"
            img={Image1} />
        </ContainerSections>
    </>
  )
}

const ContainerSections = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Content