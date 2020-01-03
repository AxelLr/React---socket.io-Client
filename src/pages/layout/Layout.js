import React, { useContext } from 'react'
import Chat from '../../components/chat/Chat'
import Login from '../login/Login'
// CONTEXT
import { Context } from '../../context/Context'

const Layout = (props) => {

  const context = useContext(Context)
  const { userConnected } = context.State

    return (
        <div className='layout-container'>
         {!userConnected ? <Login /> : < Chat history={props.history} />}
        </div>
    )
}

export default Layout