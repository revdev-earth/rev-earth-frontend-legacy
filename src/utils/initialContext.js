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

  // return initalContext
  return initialContext
}
