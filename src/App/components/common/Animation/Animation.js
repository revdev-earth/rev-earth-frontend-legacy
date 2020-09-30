import React, { useState, useRef, useLayoutEffect } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { ComponentRef } from './Animations.style'
import useWindowSize from '../../../hooks/useWindowSize'

const Animation = props => {
  const { children, animation = 'fade', positionStart: ps } = props
  const [ref, dimensions] = useDimensions()
  const windowSize = useWindowSize()
  const [animade, setAnimade] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      if (Object.keys(dimensions).length === 0 && dimensions.constructor === Object) {
        if (Math.abs(currPos.y) + vh > vh) {
          return setAnimade(true)
        }
      }

      let psn = ps === 'top' ? 3.5 : ps === 'bottom' ? 2 : 3
      if (windowSize.width < 767) psn = 4

      const positionScrollDown = Math.abs(currPos.y) + vh
      const limit = dimensions.offsetTop + dimensions.offsetHeight / psn
      const passLimit = positionScrollDown > limit

      if (animade !== passLimit) setAnimade(passLimit)
    },
    [animade, dimensions, windowSize],
    false,
    false,
    300
  )

  return (
    <ComponentRef
      ref={ref}
      animation={animation}
      className={`${!animade ? 'init' : 'init animate'} ${animation}`}>
      {children}
    </ComponentRef>
  )
}

const useDimensions = () => {
  const ref = useRef(null)

  const [dimensions, setDimensions] = useState({})

  useLayoutEffect(() => {
    function updatePosition() {
      const refPosition = {
        offsetHeight: ref?.current?.offsetHeight || 0,
        offsetLeft: ref?.current?.offsetLeft || 0,
        offsetTop: ref?.current?.offsetTop || 0,
        offsetWidth: ref?.current?.offsetWidth || 0
      }
      setDimensions(refPosition)
    }

    if (ref.current !== null) {
      setTimeout(updatePosition, 300)
    }

    // Add event listener
    window.addEventListener('resize', updatePosition)
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updatePosition)
  }, [ref])

  return [ref, dimensions]
}

export default Animation
