import React,{ useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom' 
// CONTEXT
import { Context } from '../../../../context/Context'
import Message from '../../../chat/messages/message/Message'

export default function PrivateMessage(props) {

  const context = useContext(Context)
  const { privateMessages } = context.State
  const { id } = props

    return (
        <ScrollToBottom className='messages-container' >
              { privateMessages.filter(chat => chat.idReceiver === id || chat.idSender === id ).map((chat, uid) => < Message key={uid} message={chat} />  ) }
        </ ScrollToBottom >
    )
}
