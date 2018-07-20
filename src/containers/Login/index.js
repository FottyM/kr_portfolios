import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'

import { setCredentials, requestLogin } from './actions'
class Login extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    credentials: PropTypes.object,
    history: PropTypes.object
  }

  login = (e) => {

    e.preventDefault()
    const { email, password } = this.props.credentials
    this.props.dispatch(requestLogin(email, password))

  }

  handleChange = ({ target }) => {

    const { email, password } = this.props.credentials
    if (target.name === 'email') {
      this.props.dispatch(setCredentials({ email: target.value, password }))
    } else this.props.dispatch(setCredentials({ email, password: target.value }))

  }

  componentDidMount = () => {
    const { error, token } = this.props.credentials
    if (!isNil(token)) {
      this.props.history.push('/portfolios')
    }
  }

  render() {

    return (
      <div className="row">
        <div className="col-4 offset-4 bg-dark text-white p-3 rounded">
          <form onSubmit={this.login} >
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
              <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name='password' id="password" placeholder="Password" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  credentials: state.login
})


export default connect(mapStateToProps)(Login)