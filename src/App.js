import React from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
//PAGES
import Layout from './pages/layout/Layout'
import Homepage from './pages/homepage/Homepage'

function App () {

  return (
          <Router>
            <Switch>
              <Route exact path='/' component={Homepage} /> 
              <Route exact path='/Community' component={Layout} /> 
            </Switch> 
          </Router>
  )
}

export default App
