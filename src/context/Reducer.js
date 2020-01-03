import { SET_USER_CONNECTED, SET_USER_SOCKET, PUSH_NEW_MESSAGE, CONNECTED_USERS, ADMIN_MESSAGES, USER_DISCONNECTED } from './Types'

function Reducer (state, action) {
    switch(action.type) {
        case SET_USER_CONNECTED:
            return {
                ...state,
                userConnected: action.payload
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
            console.log('wasaaa')
            return {
                ...state,
                userConnected: '',
                chatGeneral: [],
                userConnectedSocket: {}
            }
      default: return state
    }
  }

  export default Reducer