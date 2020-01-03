import React,{ useContext } from 'react'
import { Context } from '../../../context/Context'
import { USER_DISCONNECTED } from '../../../context/Types'

export default function UserConnected(props) {

const context = useContext(Context)
const { userConnected, userConnectedSocket } = context.State

    
const logOut =  () => {
    userConnectedSocket.off()
    context.Dispatch({type: USER_DISCONNECTED})
    props.history.push('/Community')
}
    return (
        <div className='user-connected-container'>
            <h4>{userConnected}</h4>
            <button onClick={logOut}> Desconectarse </button>
        </div>
    )
}
