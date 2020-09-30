import { useState, useEffect } from 'react'
// import { checkLenguage } from './translation'
import Storage from './Storage'
import checkoutLenguage from './checkLenguage'

// function initialize Context
export default function initialContext() {
  let storage = Storage
  let contextStorage = storage.get('context')
  let initialContext = {
    lenguage: 'en',
    theme: 'light'
  }

  // if local storage context then use localContext
  if (contextStorage) {
    // Use localStorage Context
    initialContext = contextStorage
  } else {
    // Check the initial Lenguage of the browser
    initialContext.lenguage = checkoutLenguage()

    // set context actual into localStorage
    storage.set('context', initialContext)
  }

  initialContext.theme = macthMediaTheme()

  // return initalContext
  return initialContext
}

function macthMediaTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
  // To watch for changes:

  // useEffect(() => {
  //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  //     setTheme(e.matches ? 'dark' : 'light')
  //   })
  //   return () => {
  //     window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change')
  //   }
  // }, [])
}
