import React,{ useContext } from 'react'
import { Context } from '../../../../context/Context'
import ReactEmoji from 'react-emoji'
import Moment from 'moment'

const Message = (props) => {

 const context = useContext(Context)

 const { userConnected } = context.State

 const { user, message, createdAt } = props.message

 console.log(props.message)

  let isSentByCurrentUser = false;

  if(user === userConnected) {
    isSentByCurrentUser = true
  } 

  return (
    isSentByCurrentUser
    ? (
      <div className='message-content' >
        <p className="user-name"  >{userConnected}</p>
        <span> { Moment(createdAt).startOf('second').fromNow() } </span>
        <div >
          <p >{ReactEmoji.emojify(message)}</p>
        </div>
      </div>
      )
      : (
        <div className='message-content-u' >
          <div >
          <p className="user-name" >{user}</p>
          <span> { Moment(createdAt).startOf('second').fromNow() } </span>
          </div>
          <p >{ReactEmoji.emojify(message)}</p>
        </div>
      )
  );
}

export default Message;