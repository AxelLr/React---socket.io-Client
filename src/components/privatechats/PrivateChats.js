import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import PrivateChat from './privatechat/PrivateChat'

export default function PrivateChats() {

    const context = useContext(Context)
    const { privateChats } = context.State

    return (
        <div className='PrivateChats-grid'> 
            {privateChats.map((chat, uid) => <PrivateChat key={uid} chat={chat} />) }
        </div>
    )
}
