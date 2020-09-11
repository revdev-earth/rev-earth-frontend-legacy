import styled from 'styled-components'

export const ComponentRef = styled.div`
  transition-duration: 0.4s;
  transition-delay: 0s;
  pointer-events: none;
  ${ ({animation}) => animation.includes("fade") && animations.fade }
  ${ ({animation}) => animation.includes("zoom") && animations.zoom }
  ${ ({animation}) => animation.includes("slide") && animations.slide }
  ${ ({animation}) => animation.includes("flip") && animations.flip }

  ${ ({animation}) => animations[animation] }

  &.animate {
    transition-delay: 0ms;
    pointer-events: auto;
    transition-timing-function: ease;
    ${ ({animation}) => animation.includes("fade") && animations.fade.animate }
    ${ ({animation}) => animation.includes("zoom") && animations.zoom.animate }
    ${ ({animation}) => animation.includes("slide") && animations.slide.animate }
    ${ ({animation}) => animation.includes("flip") && animations.flip.animate }
  }
`


// Animations variables
let distance = "100px";

/**
  * Fade animations:
  * fade
  * fade-up, fade-down, fade-left, fade-right
  * fade-up-right, fade-up-left, fade-down-right, fade-down-left
*/

/**
  * Zoom animations:
  * zoom-in, zoom-in-up, zoom-in-down, zoom-in-left, zoom-in-right
  * zoom-out, zoom-out-up, zoom-out-down, zoom-out-left, zoom-out-right
*/

/**
  * Slide animations
*/

/**
  * Flip animations:
  * flip-left, flip-right, flip-up, flip-down
*/

const animations = {
  "fade": {
    "opacity": 0,
    "transition-property": "opacity, transform",
    "animate": {
      "opacity": 1,
      "transform": "none"
    }
  },
  "fade-up": {
    "transform": `translate3d(0, ${distance}, 0)`
  },
  "fade-down": {
    "transform": `translate3d(0, -${distance}, 0)`
  },
  "fade-right": {
    "transform": `translate3d(-${distance}, 0, 0)`
  },
  "fade-left": {
    "transform": `translate3d(${distance}, 0, 0)`
  },
  "fade-up-right": {
    "transform": `translate3d(-${distance}, ${distance}, 0)`
  },
  "fade-up-left": {
    "transform": `translate3d(${distance}, ${distance}, 0)`
  },
  "fade-down-right": {
    "transform": `translate3d(-${distance}, -${distance}, 0)`
  },
  "fade-down-left": {
    "transform": `translate3d(${distance}, -${distance}, 0)`
  },

  "zoom": {
    "opacity": 0,
    "transition-property": "opacity, transform",
    "animate": {
      "opacity": 1,
      "transform": "translate3d(0, 0, 0) scale(1)"
    }
  },
  "zoom-in": {
    "transform": "scale(.6)"
  },
  "zoom-in-up": {
    "transform": `translate3d(0, ${distance}, 0) scale(.6)`
  },
  "zoom-in-down": {
    "transform": `translate3d(0, -${distance}, 0) scale(.6)`
  },
  "zoom-in-right": {
    "transform": `translate3d(-${distance}, 0, 0) scale(.6)`
  },
  "zoom-in-left": {
    "transform": `translate3d(${distance}, 0, 0) scale(.6)`
  },
  "zoom-out": {
    "transform": "scale(1.2)"
  },
  "zoom-out-down": {
    "transform": `translate3d(0, -${distance}, 0) scale(1.2)`
  },
  "zoom-out-right": {
    "transform": `translate3d(-${distance}, 0, 0) scale(1.2)`
  },
  "zoom-out-left": {
    "transform": `translate3d(${distance}, 0, 0) scale(1.2)`
  },

  "slide": {
    "transition-property": "transform",
    "visibility": "hidden",
    "animate": {
      "visibility": "visible",
      "opacity": 1,
      transform: "translate3d(0, 0, 0)"
    }
  },
  'slide-up': {
    transform: "translate3d(0, 100%, 0)"
  },
  'slide-down': {
    transform: "translate3d(0, -100%, 0)"
  },
  'slide-right': {
    transform: "translate3d(-100%, 0, 0)"
  },
  'slide-left': {
    transform: "translate3d(100%, 0, 0)"
  },



  'flip': {
    "backface-visibility": "hidden",
    "transition-property": "transform"
  },
  'flip-left': {
    "transform": "perspective(2500px) rotateY(-100deg)",
    "animate": {
      "transform": "perspective(2500px) rotateY(0)"
    }
  },
  'flip-right': {
    "transform": "perspective(2500px) rotateY(100deg)",
    "animate": {
      "transform": "perspective(2500px) rotateY(0)"
    }
  },

  'flip-up': {
    "transform": "perspective(2500px) rotateX(-100deg)",
    "animate": {
      "transform": "perspective(2500px) rotateX(0)"
    }
  },

  'flip-down': {
    "transform": "perspective(2500px) rotateX(100deg)",
    "animate": {
      "transform": "perspective(2500px) rotateX(0)"
    }
  }


}
