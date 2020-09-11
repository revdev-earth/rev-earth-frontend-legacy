import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Intro from './Intro'
import Image1 from '../../static/images/milky.jpg'


const Content = () => {
  const img = {
    src: Image1,
    alt: 'Milky'
  }
  return (
    <>
      <Intro 
        title="Rev Earth"
        animation="zoom-out"
        img={img} />
        <ContainerSections>
          <Section
            colsA="16"
            title="Section 1"
            text="Acompañando a la seccion 1"
            position="left"
            animation="fade-right"
            img={img} />
          <Section
            colsB="16"
            title="Section 2" 
            text="Acompañando a la seccion 2"
            position="right"
            animation="fade-left"
            img={img} />
          <Section
            title="Section 3" 
            text="Acompañando a la seccion 3"
            position="down"
            animation="fade-up"
            positionStart="top"
            img={img} />
        </ContainerSections>
    </>
  )
}

const ContainerSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export default Content