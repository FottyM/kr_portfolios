import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const SecureRoute = ({ component: Component, loggedIn, redirectPath, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectPath,
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
  location: PropTypes.any,
  redirectPath: PropTypes.string
}

SecureRoute.defaultProps = {
  component: null,
  redirectPath: '/login'
}

export default SecureRoute