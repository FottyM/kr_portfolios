import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Jumbotron from './components/Jumbotron'
import Login from './containers/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact={true} path='/' component={Jumbotron} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Jumbotron} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
