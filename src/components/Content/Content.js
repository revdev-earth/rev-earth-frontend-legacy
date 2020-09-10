import React from 'react';
import Section from './Section'
import Intro from './Intro'

const Content = () => {
  return (
    <>
      <Intro 
        title="Rev Earth" />
      <Section
        title="Section 1"
        text="Acompañando a la seccion 1" />
      <Section
        title="Section 2" 
        text="Acompañando a la seccion 2" />
      <Section
        title="Section 3" 
        text="Acompañando a la seccion 3" />
    </>
  )
}

export default Content