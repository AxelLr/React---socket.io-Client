import React, { useContext } from 'react'
import { Context } from '../../context/Context'

export default function ConnectedUsers() {

    const context = useContext(Context)
    const { connectedUsers } = context.State
   
    return (
        <div className='connected-users-container'>
             { connectedUsers.map( (user, uid) => <p key={uid}> {user.user} </p>) }
        </div>
    )
}
