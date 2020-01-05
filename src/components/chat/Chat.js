import React,{ useContext, useEffect } from 'react'
import Messages from './messages/Messages'
import SendMessage from './sendmessage/SendMessage'
import UserConnected from './connecteduser/UserConnected'
import ConnectedUsers from '../connectedUsers/ConnectedUsers'
import { Context } from '../../context/Context'
import { CONNECTED_USERS, ADMIN_MESSAGES, USER_DISCONNECTED, PUSH_NEW_PRIVATE_MESSAGE} from '../../context/Types'

export default function Chat(props) {
    
  const context = useContext(Context)
  const { userConnected, userConnectedSocket } = context.State
  const { Dispatch } = context

     useEffect(() => {

         const newUser = {
           user: userConnected,
           id: userConnectedSocket.id
         }
  
          userConnectedSocket.emit('join', newUser)
          return () => {
           userConnectedSocket.emit('USER_LEAVE')
           Dispatch({ type: USER_DISCONNECTED})
           userConnectedSocket.off()

          console.log('NANI???')
         };
        }, [userConnectedSocket, userConnected, Dispatch ])

        useEffect(() => {
            userConnectedSocket.on('CONNECTED_USERS', (users) => {
               
              Dispatch({type: CONNECTED_USERS, payload: users});
                });
            
               userConnectedSocket.on('NEW_USER', (data) => {
                   console.log('FALOPA')    
                 Dispatch({type: ADMIN_MESSAGES, payload: data});
                 })
            
                 userConnectedSocket.on('WELCOME', (data) => {
                  Dispatch({type: ADMIN_MESSAGES, payload: data});
                 })
            
                 userConnectedSocket.on('USER_DISCONNECTED', (data) => {
                  Dispatch({type: ADMIN_MESSAGES, payload: data});
                 }) 

                 userConnectedSocket.on('NEW_PRIVATE_MESSAGE', ( { sender, receiver, message, createdAt, id, readed } ) => {
                  console.log(message)
                Dispatch({ type: PUSH_NEW_PRIVATE_MESSAGE, payload: { sender, receiver, message, createdAt, id, readed } })
              });
           }, [userConnectedSocket, Dispatch ])

    return (
        <div className='chat-container'> 

            <div className='chat-userlist-container'>
                < ConnectedUsers />
            </div>

                <div className='chat-title-container'>
                     < UserConnected history={props.history} />
                </div>
                
                < Messages />

                <div className='send-message-container'>
                < SendMessage />
                </div>
        </div>
    )
}
