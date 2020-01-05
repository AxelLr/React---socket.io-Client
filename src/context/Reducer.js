import { SET_USER_CONNECTED, SET_USER_SOCKET, 
    PUSH_NEW_MESSAGE, CONNECTED_USERS, SET_NOTIFICATIONS_AS_READED,
     ADMIN_MESSAGES, USER_DISCONNECTED, NEW_PRIVATE_CHAT, PUSH_NEW_PRIVATE_MESSAGE, CLOSE_CHAT } from './Types'

function Reducer (state, action) {
    switch(action.type) {
        case SET_USER_CONNECTED:
            return {
                ...state,
                userConnected: action.payload,
        } 
        case SET_USER_SOCKET:
            return {
                ...state,
                userConnectedSocket: action.payload 
        }
        case PUSH_NEW_MESSAGE:
            return {
                ...state,
                chatGeneral: [ ...state.chatGeneral, 
                action.payload
            ]
        }
        case CONNECTED_USERS:
            return {
                ...state,
                connectedUsers: [ ...action.payload
            ]
        }
        case ADMIN_MESSAGES:
            return {
                ...state,
                chatGeneral: [ ...state.chatGeneral,
                    action.payload
            ]
        }
        case USER_DISCONNECTED:
            return {
                ...state,
                userConnected: '',
                chatGeneral: [],
                userConnectedSocket: {},
                privateChats: [],
                privateMessages: []
            }
        case NEW_PRIVATE_CHAT: {
           const { id } = action.payload
           const findUser = state.privateChats.find(item => item.id === id) 
           if(!findUser) {
            state.privateChats = [ ...state.privateChats, action.payload] 
          
           } else {
            state.privateChats =  state.privateChats.filter(chat => chat.id !== id)
           }
           return {
               ...state
           }}
        case PUSH_NEW_PRIVATE_MESSAGE: {
           
            return {
                ...state,
                privateMessages : [ ...state.privateMessages, action.payload ]
            }}
         case SET_NOTIFICATIONS_AS_READED: {

            for( let i = 0; i < state.privateMessages.length; i++) {

                    if( state.privateMessages[i].readed === false && state.privateMessages[i].sender === action.payload ) {
                        state.privateMessages[i].readed = true
                    }
            }
             return {
                 ...state,
             } }
         case CLOSE_CHAT:
         const { id } = action.payload
         state.privateChats = state.privateChats.filter(chat => chat.idSender !== id)
         return {
            ...state,
        }
      default: return state
    }
  }

export default Reducer 