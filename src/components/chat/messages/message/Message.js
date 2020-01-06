import React,{ useContext } from 'react'
import { Context } from '../../../../context/Context'
import ReactEmoji from 'react-emoji'
import Moment from 'moment'

const Message = (props) => {

 const context = useContext(Context)

 const { userConnected } = context.State

 const { user, message, createdAt } = props.message

 const { sender } = props.message

 console.log(props.message)

  let isSentByCurrentUser = false;

  if(user === userConnected || sender === userConnected ) {
    isSentByCurrentUser = true
  } 

  return (
    isSentByCurrentUser
    ? (
      <div className='message-content' >
        
        <div className='moment-container' >
          <span> { Moment(createdAt).startOf('second').format('LT') } </span> 
        </div>
       <div> 
        <p >{ReactEmoji.emojify(message)}</p>
        </div>
    
      </div>
      )
      : (
        <div className='message-content-u' >
          <div className='user-moment-container' >
             <p className="user-name" >{user}</p>
            <span> { Moment(createdAt).startOf('second').format('LT') } </span>
          </div>
          <div>
             <p >{ReactEmoji.emojify(message)}</p>
          </div>
        </div>
      )
  );
}

export default Message;