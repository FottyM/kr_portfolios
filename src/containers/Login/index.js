import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import isNil from 'lodash/isNil'
import { Link } from 'react-router-dom'


import { setLoginCredentials, requestLogin } from './actions'
import Input from '../../components/Input'
import Alert from '../../components/Alert'
import Spinner from '../../components/Spinner'
import getToken from '../../utils/token'
class Login extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
    credentials: PropTypes.object,
    history: PropTypes.object
  }

  login = (e) => {
    e.preventDefault()
    const { email, password, loggedIn } = this.props.credentials
    this.props.dispatch(requestLogin(email, password))
    if (loggedIn) this.props.history.push('/dashboard')
  }

  handleChange = ({ target }) => {
    const val = { [target.name]: target.value }
    this.props.dispatch(setLoginCredentials(val))
  }

  componentDidUpdate = () => {
    const { token } = getToken()
    if (!isNil(token)) this.props.history.push('/dashboard')
  }


  render() {
    const { email, password, loading, error } = this.props.credentials

    return (
      <div className="container">
        <div className="row" style={{ marginTop: 100 }}>
          <div className="col-10 col-md-6 offset-1 offset-md-3 bg-light p-5 rounded">
            <Spinner loading={loading}>
              <h2 className='text-center text-primary py-1'>Login</h2>
              <Alert
                type='danger'
                messages={error}
              />
              <form onSubmit={this.login} onChange={this.handleChange}  >

                <Input id='email' label='Email address'
                  name='email' placeholder='Enter email'
                  type='email' value={email}
                  onChange={this.handleChange} />

                <Input id='password' name='password'
                  label='Password' type='password'
                  placeholder='Enter password' value={password}
                  onChange={this.handleChange} />

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary" onClick={this.login}>Login</button>
                  <Link to='/register' className='btn btn-secondary'>
                    Register
                  </Link>
                </div>
              </form>
            </Spinner>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  credentials: state.login
})


export default connect(mapStateToProps)(Login)