import React,{ useState, useContext } from 'react'
import { Context } from '../../../context/Context'

export default function SendMessage() {

const context = useContext(Context)

const { userConnectedSocket, userConnected } = context.State

const [message, setMessage] = useState('')
  
const handleSubmit = (e) => {
    e.preventDefault()

    if(message) {
        userConnectedSocket.emit('SEND_MESSAGE', { userConnected, message }, () => setMessage(''));
    }
}
    return (
        <div className='sendMessage-container'>

            <form onSubmit={handleSubmit} > 
                <input maxLength='250' type='text' placeholder='Escribe un mensaje...' onChange={(e) => setMessage(e.target.value)} value={message}  /> 
                <button type='submit'> Enviar </button>
            </form>
            
        </div>
    )
}
