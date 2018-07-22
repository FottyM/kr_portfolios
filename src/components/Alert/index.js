import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import map from 'lodash/map'
import castArray from 'lodash/castArray'

const Alert = ({ type, messages }) => {

  const errorMessage = get(messages, ['error', 'message'], '')
  const message = get(messages, ['message'], '')
  const restMessages = get(messages, ['error', 'error'], {})
  return (
    <React.Fragment>
      {
        !isEmpty(messages) && (
          <div className={`alert alert-${type}`} role="alert" >
            {
              <div>
                <p>{message}</p>
                <p>{errorMessage}</p>
              </div>
            }
          </div>)
      }
    </React.Fragment>
  )
}

Alert.propTypes = {
  type: PropTypes.oneOf(
    ['primary', 'secondary', 'success', 'danger',
      'warning', 'info', 'light', 'dark']
  ).isRequired,
  messages: PropTypes.any.isRequired
}

export default Alert