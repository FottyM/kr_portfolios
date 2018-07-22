import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const SecureRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)


SecureRoute.propTypes = {
  component: PropTypes.func,
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.any
}

SecureRoute.defaultProps = {
  component: null,
}

export default SecureRoute