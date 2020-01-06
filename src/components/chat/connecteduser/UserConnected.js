import React,{ useContext } from 'react'
import { Context } from '../../../context/Context'
import { USER_DISCONNECTED } from '../../../context/Types'
import WifiOff from '@material-ui/icons/WifiOff'
import ToolTip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

export default function UserConnected(props) {

const context = useContext(Context)
const { userConnected, userConnectedSocket } = context.State

    
const logOut =  () => {
    userConnectedSocket.off()
    context.Dispatch({type: USER_DISCONNECTED})
    props.history.push('/Community')
}
    return (
        <div className='user-connected-container'>
            <h2>{userConnected}</h2>
            <ToolTip title="Desconectarse" placement="left" > 
                <IconButton onClick={logOut}>  
                     < WifiOff style={{color: '#800000', margin: 5}} />  
                </IconButton> 
             </ToolTip>
        </div>
    )
}
