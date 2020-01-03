import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.scss'
import { State } from './context/Context'

ReactDOM.render( <State> <App /> </State>, document.getElementById('root'))

serviceWorker.unregister()
