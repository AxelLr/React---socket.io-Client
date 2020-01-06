import React,{ useEffect, useContext } from 'react'
import PrivateMessage from './privatemessage/PrivateMessage'
import SendPrivateMessage from './sendprivatemessage/SendPrivateMessage'
import { Context } from '../../../context/Context'
import { SET_NOTIFICATIONS_AS_READED, CLOSE_CHAT} from '../../../context/Types'
import CloseIcon from '@material-ui/icons/Close'


export default function PrivateChat(props) {

    const context = useContext(Context)
    const { Dispatch } = context
    const { privateMessages } = context.State

    const { user, id } = props.chat
    useEffect(() => {

        const { user } = props.chat

        Dispatch({type: SET_NOTIFICATIONS_AS_READED, payload: user })
     
    }, [privateMessages, Dispatch, props.chat ])

    const deleteChat = () => {  
        Dispatch({type: CLOSE_CHAT, payload: { user, id } })
    }

    return (
        <div className='private-chat-container'>

                <div className='user-connected-container'>
                     <h4> { user } </h4> 
                     <button onClick={deleteChat}> < CloseIcon style={{color: '#800000', margin: 5}} /> </button>
                </div>

                < PrivateMessage user={user} id={id} />

                < SendPrivateMessage user={user} id={id} />
                
        </div>
    )
}
