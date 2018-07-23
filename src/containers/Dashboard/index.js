import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'

import User from '../User'
import Portfolios from '../Portfolios'
import PortfoliosForm from '../Portfolios/PortfolioForm'
import { requestPortfolios } from '../Portfolios/actions'
import { requestUserDetails } from '../User/actions'
import getToken from '../../utils/token'
import { logout } from '../../utils/logout'

class Dashboad extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    authToken: PropTypes.string
  }

  checkAuth = () => {
    const { token, user_id, exp } = getToken()
    const timeDiff = moment(exp).diff(Date.now(), 'millisecond')
    if (!isEmpty(token) && timeDiff <= 0) {
      this.props.dispatch(requestPortfolios(user_id))
      this.props.dispatch(requestUserDetails(user_id))
    } else {
      logout(this.props.history.push)
      this.props.history.push('/login')
    }
  }
  componentDidMount = () => {
    this.checkAuth()
  }

  componentDidUpdate = () => {
    this.checkAuth()
  }


  render() {
    const { match } = this.props
    return (
      <div className='container'>
        <div className="row">
          <div className="col-12 col-md-3">
            <User />
          </div>
          <div className="col-12 col-md-9">
            <Switch>
              <Route exact={true} path={`${match.url}/portfolios`} component={Portfolios} />
              <Route path={`${match.url}/portfolios/new`} component={PortfoliosForm} />
              <Route component={Portfolios} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(Dashboad)