import React,{ useState, useContext, useEffect } from 'react'
import io from 'socket.io-client'
import CircularProgress from '@material-ui/core/CircularProgress'
// CONTEXT
import { Context } from '../../context/Context'
// TYPES
import { SET_USER_CONNECTED, SET_USER_SOCKET } from '../../context/Types'

 const ENDPOINT = "https://reactchatapp120.herokuapp.com/"

function Login() {

const context = useContext(Context)
const {  userConnectedSocket } = context.State
const { Dispatch } = context

const [ username, setUsername ] = useState('')
const [errors, setErrors] = useState('')
const [isDisabled, setDisabled] = useState(false)

useEffect(() => {

  const initSocket = () => {
      
      const socketio = io(ENDPOINT)

      socketio.on('connection', () => { console.log('connected') })

      Dispatch({type: SET_USER_SOCKET, payload: socketio})
  }  
initSocket()
}, [Dispatch])

const handleChange = (e) => {
    setUsername(e.target.value)
   
} 
    
const handleSubmit = (e) => {
    setDisabled(true)
    e.preventDefault();
    userConnectedSocket.emit('VERIFY_USER', username, setUser )
}

const setUser = ( { isUser } ) => {
   
    if(isUser) {
        setErrors("Lo sentimos, el nombre ya ha sido tomado. Por favor, intenta con otro")
        setDisabled(false)
    } else {
        setErrors('')
        setDisabled(false)
        context.Dispatch({type: SET_USER_CONNECTED, payload: username })
    }
}
    return (
        <div className='login-container'>
           
           <div>
           <h3>Debes conectarte para poder Ingresar a la sala</h3>
                <form onSubmit={handleSubmit} > 
                <input minLength='4' maxLength='15' required  type='text' placeholder='Ingresa tu nombre...' onChange={handleChange} value={username}  /> 
                { errors && <p> {errors} </p> }
                <button disabled={isDisabled} type='submit'> <span >Ingresar </span> <span>{isDisabled &&  < CircularProgress style={{background: 'transparent', margin: 5}} size={20} /> }</span> </button>
                </form>
            </div> 

        </div>
    )
}

export default Login