import React,{ useReducer } from 'react'
import Reducer from './Reducer'

export const Context = React.createContext()

const initialState = {
  userConnected: '',
  userConnectedSocket: {},
  connectedUsers: [],
  chatGeneral: [],
  privateChats: [],
  privateMessages: []
}

export function State (props) {
                                         
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <Context.Provider value= {{ State: state, Dispatch: dispatch }} >
            {props.children}
        </Context.Provider>
    )
}

