import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import User from '../User'
import Portfolios from '../Portfolios'
import PortfoliosForm from '../Portfolios/PortfolioForm'

const Dashboad = ({ match }) => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-2">
          <User />
        </div>
        <div className="col-10">
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
Dashboad.propTypes = {
  match: PropTypes.object.is
}
export default Dashboad