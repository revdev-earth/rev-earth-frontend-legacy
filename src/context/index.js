import React, { createContext, useReducer } from 'react'

const initialState = {
  global: { }
}

// Create Context
export const MyContext = createContext();

// Create Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SCROLL":
      return {
        global: {...state.global, scroll: action.payload}
      };
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload]
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};

// Create a provider for components to consume and subscribe to changes
export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{context: state, dispatch: dispatch}}>
      {children}
    </MyContext.Provider>
  );
};