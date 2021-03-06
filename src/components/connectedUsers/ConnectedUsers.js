import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { NEW_PRIVATE_CHAT } from '../../context/Types'
import People from '@material-ui/icons/People'

export default function ConnectedUsers() {

    const context = useContext(Context)
    const { connectedUsers, userConnected, privateMessages } = context.State

    let notifications = '';

    const openPrivateChat = (user, id) => {
    if(userConnected !== user) {
    context.Dispatch({type: NEW_PRIVATE_CHAT, payload: { user, id } })
    }
    }

  let usuariosConectados = connectedUsers.filter(user => user.user !== userConnected ).map(
        (user, uid) => { 

            const messages = privateMessages && privateMessages.filter(message => message.sender === user.user && message.readed === false)
            notifications =  messages ? messages.length : '';

       return ( <p onClick={ ()=> openPrivateChat(user.user, user.id)} key={uid}> 
  <span> {user.user} </span > { notifications !== 0 && <span className='notifications'> {notifications} </span> }  </p>
   ) 
})

    return (
        <div className='connected-users-container'>
            <h2> < People style={{marginTop: 8, fontSize: 70}} /> </h2>
             { usuariosConectados }
        </div>
    )
}
