import React,{ useContext, useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import { PUSH_NEW_MESSAGE } from '../../../context/Types' 
// CONTEXT
import { Context } from '../../../context/Context'
import Message from './message/Message'

export default function Messages() {

  const context = useContext(Context)
  const { userConnectedSocket, chatGeneral } = context.State
  const { Dispatch } = context
 
  useEffect(() => {
    userConnectedSocket.on('NEW_MESSAGE', ( {user, message} ) => {
     
     Dispatch({ type: PUSH_NEW_MESSAGE, payload: {user, message} })
    });

  }, [userConnectedSocket, Dispatch])

    return (
        <ScrollToBottom className='messages-container' >     

            {chatGeneral.map( (message, uid) => {
              if(typeof(message) === 'string' ) {
                return <p key={uid}> {message} </p>
              } else { return < Message key={uid} message={message}   /> } } ) }
  
        </ ScrollToBottom >
    )
}
