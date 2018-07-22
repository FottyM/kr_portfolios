import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'

import User from '../User'
import Portfolios from '../Portfolios'
import PortfoliosForm from '../Portfolios/PortfolioForm'
import { requestPortfolios } from '../Portfolios/actions'
import { requestUserDetails } from '../User/actions'
import { tokenSelector } from '../App/selectors'

class Dashboad extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    authToken: PropTypes.string
  }

  componentDidMount = () => {
    const { authToken } = this.props

    if (!isEmpty(authToken)) {
      this.props.dispatch(requestPortfolios())
      this.props.dispatch(requestUserDetails())
    } else {
      this.history.push('/')
    }

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
const mapStateToProps = (state) => ({
  authToken: tokenSelector(state)
})


export default connect(mapStateToProps)(Dashboad)