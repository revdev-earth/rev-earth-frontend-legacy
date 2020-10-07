import React from 'react'
import styled from 'styled-components'
import Section from '../components/Content/Section'
import Intro from '../components/Content/Intro'

import Image1 from '../static/images/milky.jpg'
import Image2 from '../static/images/meditation.jpg'
import Image3 from '../static/images/bamboo.jpg'
import Image4 from '../static/images/adventure.jpg'

const imgs = [
  {
    src: Image1,
    alt: 'Milky'
  },
  {
    src: Image2,
    alt: 'meditation'
  },
  {
    src: Image3,
    alt: 'bamboo'
  },
  {
    src: Image4,
    alt: 'adventure'
  }
]

const Content = props => {
  const {
    data: { home: data }
  } = props

  return (
    Object.keys(data).length > 0 && (
      <>
        <Intro title='Rev Earth' animation='zoom-out' img={imgs[0]} />
        <ContainerSections>
          <Section
            colsA='14'
            title={data.section1.title}
            text={data.section1.text}
            position='left'
            animation='fade-right'
            img={imgs[1]}
          />
          <Section
            colsB='14'
            title={data.section2.title}
            text={data.section2.text}
            position='right'
            animation='fade-left'
            img={imgs[2]}
          />
          <Section
            title={data.section3.title}
            text={data.section3.text}
            position='down'
            animation='fade-up'
            positionStart='top'
            img={imgs[3]}
          />
        </ContainerSections>
      </>
    )
  )
}

const ContainerSections = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export default Content
