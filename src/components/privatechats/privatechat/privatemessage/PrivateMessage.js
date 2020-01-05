import React,{ useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom' 
// CONTEXT
import { Context } from '../../../../context/Context'

export default function PrivateMessage(props) {

  const context = useContext(Context)
  const { privateMessages } = context.State
  const { id } = props
  console.log(privateMessages)

    return (
        <ScrollToBottom className='messages-container' >
              { privateMessages.filter(chat => chat.idReceiver === id || chat.idSender === id ).map((chat, uid) => <p key={uid}> {chat.message} </p>) }
        </ ScrollToBottom >
    )
}
