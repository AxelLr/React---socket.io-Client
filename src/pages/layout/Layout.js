import React, { useEffect, useContext } from 'react'
import io from 'socket.io-client'
import Chat from '../../components/chat/Chat'
// CONTEXT
import { Context } from '../../context/Context'
import Login from '../login/Login'

import { SET_USER_SOCKET } from '../../context/Types'

const ENDPOINT = "http://localhost:5000/"

const Layout = (props) => {

  const context = useContext(Context)
  const { userConnected } = context.State
  const { Dispatch } = context

  useEffect(() => {

    const initSocket = () => {
        
        const socketio = io(ENDPOINT)

        socketio.on('connection', () => { console.log('connected') })

        Dispatch({type: SET_USER_SOCKET, payload: socketio})
    }  
initSocket()
 }, [Dispatch])



    return (
        <div className='layout-container'>
         {!userConnected ? <Login /> : < Chat history={props.history} />}
        </div>
    )
}

export default Layout