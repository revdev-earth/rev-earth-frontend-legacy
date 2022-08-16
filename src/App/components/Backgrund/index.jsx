import React, { useEffect, useMemo } from 'react'
import { useCtx } from '../../context'

const get_stars = () => {
  let stars = ''
  // w - h
  const w = window.screen.width
  const h = window.screen.height
  // ??
  const count = Math.floor(Math.sqrt(w * h) / 14)
  // make a start
  for (let index = 0; index < count; index++) {
    stars += `${Math.random() * w}px ${Math.random() * h}px #fff, `
  }

  // return stars
  return stars.slice(0, stars.length - 2)
}

const meteor_maker = () => {
  const left = Math.random() * window.outerWidth
  const top = Math.random() * window.outerHeight
  console.log(
    `window.outerWidth: ${window.outerWidth} window.outerHeight: ${window.outerHeight}`
  )
  const duration = (Math.random() * 500000) / 10 + 3000

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

const Background = () => {
  const stars = useMemo(() => get_stars(), [])

  const {
    state: { theme }
  } = useCtx()

  useEffect(() => {
    console.log(' theme : ', theme)
    if (theme === 'dark') {
      meteor_maker()

      setInterval(() => {
        meteor_maker()
      }, 1000)
    }
  }, [theme])

  if (theme !== 'dark') return null

  console.log('active')

  return (
    <div>
      <div className='background-stars' />
      <div
        className='stars'
        style={{
          boxShadow: stars
        }}
      />
    </div>
  )
}

export default Background
