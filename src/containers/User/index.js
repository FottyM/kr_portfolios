import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Gravatar from 'react-gravatar'
import isEmpty from 'lodash/isEmpty'
import { Link } from 'react-router-dom'

import Spinner from '../../components/Spinner'
import { emailHashSelector } from './selectors'
import { requestUserDetails } from './actions'
import { logout } from '../../utils/logout'

class User extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    emailHash: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  logout = () => {
    logout(this.props.history.push)
  }
  componentDidMount = () => {
    this.props.dispatch(requestUserDetails())
  }

  render() {
    const { data: user, loading } = this.props.user

    return (
      <div className='row bg-light mt-3 rounded'>
        <Spinner loading={loading}>
          <div className="col-12">

            <div className="text-center py-2">
              <Gravatar md5={this.props.emailHash} size={150} className='img-fluid rounded-circle' />
            </div>
          </div>
          <div className="w-100" />
          <div className="col-12">
            {
              !isEmpty(user) && (
                <React.Fragment>
                  <h4 className='text-center'>{user.first_name} {user.last_name}</h4>
                  <p className='text-center' >{user.email} </p>
                  <button className='btn btn-outline-danger btn-block' onClick={this.logout}>Logout</button>
                </React.Fragment>
              )
            }
          </div>
        </Spinner>
        <div className="w-100" />
        <div className="col-12 py-4">
          <nav className="nav nav-pills  flex-row flex-md-column">
            <Link className="nav-link " to="/dashboard/portfolios">Portfolios</Link>
            <Link className="nav-link" to="/dashboard/portfolios/new">Add Portfolio</Link>
          </nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  emailHash: emailHashSelector(state)
})



export default compose(withRouter, connect(mapStateToProps))(User)