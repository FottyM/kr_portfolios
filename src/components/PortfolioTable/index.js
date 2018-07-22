import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'

const PortfolioTable = ({ data, confirmDelete }) => {
  return (
    <table className="table table-bordered rounded table-responsive">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Cryptocurrency</th>
          <th scope="col">Amount</th>
          <th scope="col">Date of purchase</th>
          <th scope="col">Wallet location</th>
          <th scope="col">Current market value (EUR)</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
        {!isEmpty(data) && map(data, portfolio => (
          <tr key={portfolio.id}>
            <td>{portfolio.cryptocurrency}</td>
            <td>{portfolio.amount}</td>
            <td>{moment(portfolio.created_at).format('DD.MM.YYYY')}</td>
            <td>{portfolio.wallet_location}</td>
            <td>{portfolio.current_market_value}</td>
            <th scope="row" >
              <button
                className='btn btn-outline-danger'
                onClick={() => confirmDelete(portfolio.id)}>
                Delelte
              </button>
            </th>
          </tr>))}
      </tbody>
    </table>

  )
}

PortfolioTable.propTypes = {
  confirmDelete: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    cryptocurrency: PropTypes.string,
    amount: PropTypes.string,
    date_of_purchase: PropTypes.string,
    wallet_location: PropTypes.string,
    current_market_value: PropTypes.string,
  })).isRequired
}

export default PortfolioTable