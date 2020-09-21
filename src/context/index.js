import React, { createContext, useReducer, useEffect } from 'react'
import Storage from '../utils/Storage'

// Create Context
export const Context = createContext()

// Create Reducer
const reducer = (state, action) => {
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
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
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

// Create a provider for components to consume and subscribe to changes
// in useReducer = initialState = initial
// in reducer  = callback lisener
export const ContextProvider = props => {
  const { initial, children } = props
  const storage = Storage
  const [state, dispatch] = useReducer(reducer, initial)

  // Update localStorage
  useEffect(() => {
    storage.update('context', state)
  }, [state, storage])

  return (
    <Context.Provider value={{ context: state, dispatch: dispatch }}>{children}</Context.Provider>
  )
}
