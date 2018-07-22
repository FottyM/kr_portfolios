import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import isNil from 'lodash/isNil'
import PropTypes from 'prop-types'

import Jumbotron from '../../components/Jumbotron'
import Login from '../../containers/Login'
import Register from '../../containers/Register'
import SecureRoute from '../../components/SecureRoute'
import Navbar from '../../components/Navbar'
import { tokenSelector } from './selectors'
import Dashboad from '../Dashboard'

class App extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool.isRequired
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact={true}
              path='/'
              component={Jumbotron} />
            <Route
              path='/login'
              component={Login} />
            <Route
              path='/register'
              component={Register} />
            <SecureRoute
              path='/dashboard'
              component={Dashboad}
              loggedIn={loggedIn}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}
const mapStateToProps = (state) => ({
  loggedIn: !isNil(tokenSelector(state))
})


export default connect(mapStateToProps)(App)
