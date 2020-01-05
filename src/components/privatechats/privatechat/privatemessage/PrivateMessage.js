import React,{ useEffect, useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import { PUSH_NEW_PRIVATE_MESSAGE } from '../../../../context/Types' 
// CONTEXT
import { Context } from '../../../../context/Context'
import Message from '../../../chat/messages/message/Message'

export default function PrivateMessage(props) {

const context = useContext(Context)
  const { userConnectedSocket, privateMessages, userConnected } = context.State
  const { Dispatch } = context

  const { user } = props

  useEffect(() => {
  

  }, [userConnectedSocket, Dispatch])

    return (
        <ScrollToBottom className='messages-container' >
              { privateMessages.filter(chat => chat.receiver === user || chat.sender === user).map((chat, uid) => <p key={uid}> {chat.message} </p>) }
        </ ScrollToBottom >
    )
}
