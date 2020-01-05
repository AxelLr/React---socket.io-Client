import React,{ useEffect, useContext } from 'react'
import PrivateMessage from './privatemessage/PrivateMessage'
import SendPrivateMessage from './sendprivatemessage/SendPrivateMessage'
import { Context } from '../../../context/Context'
import { SET_NOTIFICATIONS_AS_READED } from '../../../context/Types'


export default function PrivateChat(props) {

    const context = useContext(Context)
    const { Dispatch } = context

    const { user, id } = props.chat

    useEffect(() => {

        Dispatch({type: SET_NOTIFICATIONS_AS_READED, payload: user })
     
    }, [Dispatch, user])

    return (
        <div className='private-chat-container'>

                <h3> { user } </h3>

                < PrivateMessage user={user} id={id} />

                < SendPrivateMessage user={user} id={id} />
                
        </div>
    )
}