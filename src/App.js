import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Jumbotron from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route path='/' component={Jumbotron} />
        </div>
      </Router>
    )
  }
}

export default App;
