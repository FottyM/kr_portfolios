import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import get from 'lodash/get'

import { requestRegister, setRegisterCredentails } from './actions'
import Input from '../../components/Input'
import Spinner from '../../components/Spinner'
import Alert from '../../components/Alert'

class Register extends Component {

  static propTypes = {
    credentials: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  register = e => {
    e.preventDefault()
    const { email, first_name, last_name, password } = this.props.credentials
    this.props.dispatch(requestRegister({ email, first_name, last_name, password }))
  }

  handleChange = ({ target }) => {
    const val = { [target.name]: target.value }
    this.props.dispatch(setRegisterCredentails(val))
  }

  componentDidUpdate = () => {
    const { messages } = this.props.credentials
    const message = get(messages, ['message'], null)
    const waitRedirect = () => this.props.history.push('/login')
    if (message === 'user registration successful') {
      setTimeout(waitRedirect, 1500)
    }
  }


  render() {

    const { email, first_name, last_name, password, loading, error, messages } = this.props.credentials
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 offset-1 offset-md-3 bg-light p-5 rounded" style={{ marginTop: 100 }}>
            <Spinner loading={loading}>
              <h2 className='text-center text-success py-1'>Register</h2>
              <Alert messages={error ? error : { ...messages }} type={error ? 'danger' : 'success'} />
              <form onSubmit={this.register} onChange={this.handleChange}>
                <Input id='first_name' label='First name' name='first_name' value={first_name} placeholder='First name' onChange={this.handleChange} />

                <Input id='last_name' label='Last name' name='last_name' value={last_name} placeholder='Last name' onChange={this.handleChange} />

                <Input id='email' label='Email' name='email' value={email} type='email' placeholder='Enter email' onChange={this.handleChange} />

                <Input id='password' label='Password' name='password' type='password' value={password} placeholder='Enter password' onChange={this.handleChange} />
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success" onClick={this.register}>Register</button>
                  <Link to='/login' className='btn btn-secondary'>Login </Link>
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
  credentials: state.register
})


export default connect(mapStateToProps)(Register)