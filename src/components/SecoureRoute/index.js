import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const SecureRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route  {...rest} render={() => (
      loggedIn ? (
        <Component />
      ) : (
        <Redirect to="/login" />
      )
    )} />

  )
}

SecureRoute.propTypes = {
  component: PropTypes.func,
  loggedIn: PropTypes.bool.isRequired
}

SecureRoute.defaultProps = {
  component: null,
}

export default SecureRoute