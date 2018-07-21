import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import { requestPortfolios, deletePortfolioRequest } from './actions'
import User from '../User'

class Portfolios extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    portfolios: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    this.props.dispatch(requestPortfolios())
  }

  deleteItem = (id) => {
    this.props.dispatch(deletePortfolioRequest(id))
  }

  confirmDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="alert alert-dark" role="alert" >
            <h4 className='py-3'>Are you sure you want to delete this?</h4>
            <div className="d-flex justify-content-end">

              <button className='btn btn-outline-success mr-3'
                onClick={onClose}>No</button>

              <button className='btn btn-outline-danger'
                onClick={() => {
                  onClose()
                  this.deleteItem(id)
                }}>Yes, Delete it!</button>

            </div>
          </div>
        )
      }
    })
  }

  render() {
    const { portfolios: { data } } = this.props
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <User />
          </div>
          <div className="col-10">
            <table className="table">
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
                    <td>{portfolio.date_of_purchase}</td>
                    <td>{portfolio.wallet_location}</td>
                    <td>{portfolio.current_market_value}</td>
                    <th scope="row" >
                      <button
                        className='btn btn-outline-danger'
                        onClick={() => this.confirmDelete(portfolio.id)}>
                        Delelte
                      </button>
                    </th>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios
})

export default connect(mapStateToProps)(Portfolios)