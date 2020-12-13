import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useContext
} from 'react'
import Storage from '../utils/Storage'
import { reducer, initialState } from './reducer'

// Create Context
export const Context = createContext()

// Create a provider for components to consume and subscribe to changes
// in useReducer = initialState = initial
// in reducer  = callback lisener
export const ContextProvider = ({ children }) => {
  const storage = Storage
  const [state, dispatch] = useReducer(reducer, initialState())

  // Update localStorage
  useEffect(() => {
    storage.update('context', state)
  }, [state, storage])

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

// use Context
export function useCtx() {
  return useContext(Context)
}
