import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { requestRegister, setRegisterCredentails } from './actions'
import Input from '../../components/Input'

class Register extends Component {

  static propTypes = {
    credentials: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
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

  render() {

    const { email, first_name, last_name, password } = this.props.credentials
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 offset-1 offset-md-3 bg-light py-2 rounded" style={{ marginTop: 100 }}>
            <h2 className='text-danger text-center py-1'>Register</h2>
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