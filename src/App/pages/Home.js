import React, { useEffect, useMemo } from 'react'
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

const background = () => {
  let shadow = ''

  const w = window.screen.width
  const h = window.screen.height

  const count = Math.floor(Math.sqrt(w * h) / 14)

  for (let index = 0; index < count; index++) {
    shadow += `${Math.random() * w}px ${Math.random() * h}px #fff, `
  }

  const stars = shadow.slice(0, shadow.length - 2)

  console.log('stars : ', stars)

  return stars
}

const shower = () => {
  const left = Math.random() * window.outerWidth
  const top = Math.random() * window.outerHeight
  console.log(
    `window.outerWidth: ${window.outerWidth} window.outerHeight: ${window.outerHeight}`
  )
  const duration = (Math.random() * 70000) / 10 + 3000

  const div = document.createElement('div')

  div.className = 'meteor'

  div.style.top = top - 300 + 'px'

  div.style.left = left + 'px'

  document.body.append(div)
  const animation = div.animate(
    [
      {
        offset: 0,
        opacity: 1,
        marginTop: '-300px',
        marginRight: '-300px'
      },
      { offset: 0.12, opacity: 0 },
      {
        offset: 0.15,
        opacity: 0,
        marginTop: '300px',
        marginLeft: '-600px'
      },
      { offset: 1, opacity: 0, width: 0 }
    ],
    { duration: duration, easing: 'linear' }
  )

  animation.onfinish = () => div.remove()
}

const Content = props => {
  const {
    data: { home: data }
  } = props

  const stars = useMemo(() => background(), [])

  useEffect(() => {
    shower()

    setInterval(() => {
      shower()
    }, 100)
  }, [])

  return (
    Object.keys(data).length > 0 && (
      <>
        <div className='background-stars' />
        <div
          className='stars'
          style={{
            boxShadow: stars
          }}
        />
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
