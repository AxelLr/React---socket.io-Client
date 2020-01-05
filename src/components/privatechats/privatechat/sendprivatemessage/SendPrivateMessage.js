import React,{ useState, useContext } from 'react'
import { Context } from '../../../../context/Context'

export default function SendPrivateMessage(props) {

    const { user, id } = props

    const context = useContext(Context)

    const { userConnectedSocket, userConnected } = context.State
    
    const [message, setMessage] = useState('')
  
    const handleSubmit = (e) => {
    e.preventDefault()

    if(message) {
        userConnectedSocket.emit('SEND_PRIVATE_MESSAGE', { user, message, id, userConnected }, () => setMessage(''));
    }
}
    return (
        <div>
            <div className='sendMessage-container'>
                <form onSubmit={handleSubmit} > 
                    <input maxLength='250' type='text' placeholder='Escribe un mensaje...' onChange={(e) => setMessage(e.target.value)} value={message}  /> 
                    <button type='submit'> Enviar </button>
                </form>
            </div>
        </div>
    )
}
