import React, { useContext } from 'react'
import Chat from '../../components/chat/Chat'
import Login from '../login/Login'
import PrivateChats from '../../components/privatechats/PrivateChats'
// CONTEXT
import { Context } from '../../context/Context'

const Layout = (props) => {

  const context = useContext(Context)
  const { userConnected } = context.State

    return (

        <div className='layout-container'>
         {!userConnected ? <Login /> : 
         
          <div className='login-chats-container'> 
            <div> < Chat history={props.history} />  </div> 
            <div>  <PrivateChats /> </div> 
          </div>}
            
        </div>
    )
}

export default Layout