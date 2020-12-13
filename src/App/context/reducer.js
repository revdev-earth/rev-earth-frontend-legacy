import Storage from '../utils/Storage'
import { checkoutLenguage, macthMediaTheme } from '../utils'

// Create Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LENGUAGE':
      return { ...state, lenguage: action.payload }
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.payload]
      }
    case 'DEL_CONTACT':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      }
    case 'START':
      return {
        loading: true
      }
    case 'COMPLETE':
      return {
        loading: false
      }
    default:
      throw new Error()
  }
}

// function initialize Context
export function initialState() {
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
    initialContext.theme = macthMediaTheme()
    // set context actual into localStorage
    storage.set('context', initialContext)
  }

  // return initalContext
  return initialContext
}
