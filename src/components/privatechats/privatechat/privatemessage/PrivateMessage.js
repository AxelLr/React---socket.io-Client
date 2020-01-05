import React,{ useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom' 
// CONTEXT
import { Context } from '../../../../context/Context'

export default function PrivateMessage(props) {

  const context = useContext(Context)
  const { privateMessages } = context.State
  const { user } = props

    return (
        <ScrollToBottom className='messages-container' >
              { privateMessages.filter(chat => chat.receiver === user || chat.sender === user).map((chat, uid) => <p key={uid}> {chat.message} </p>) }
        </ ScrollToBottom >
    )
}
