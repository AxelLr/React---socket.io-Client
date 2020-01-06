import React,{ useState, useContext } from 'react'
import { Context } from '../../../context/Context'
import Send from '@material-ui/icons/Send'

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
                <button type='submit'> < Send style={{color: '#007AFE', background: 'transparent', fontSize: 45 }} /> </button>
            </form>
            
        </div>
    )
}
