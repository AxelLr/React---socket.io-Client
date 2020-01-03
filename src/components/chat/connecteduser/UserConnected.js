import React,{ useContext } from 'react'
import { Context } from '../../../context/Context'

export default function UserConnected(props) {

const context = useContext(Context)
const { userConnected, userConnectedSocket } = context.State
    
const logOut =  () => {
    userConnectedSocket.off();
     props.history.push('/')
}
    return (
        <div className='user-connected-container'>
            <h4>{userConnected}</h4>
            <button onClick={logOut}> Desconectarse </button>
        </div>
    )
}
