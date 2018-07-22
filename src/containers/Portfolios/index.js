import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import isNil from 'lodash/isNil'

import { requestPortfolios, deletePortfolioRequest } from './actions'
import { tokenSelector } from '../App/selectors'
import Spinner from '../../components/Spinner'
import PortfolioTable from '../../components/PortfolioTable'




class Portfolios extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    portfolios: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
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

              <button
                className='btn btn-outline-success mr-3'
                onClick={onClose}>No</button>

              <button
                className='btn btn-outline-danger'
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
    const { portfolios } = this.props
    return <div className="row mt-3 rounded ">
      <div className="col-12">
        <Spinner loading={portfolios.loading}>
          <PortfolioTable data={portfolios.data} confirmDelete={this.confirmDelete} />
        </Spinner>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios,
  loggedIn: !isNil(tokenSelector(state))
})

export default connect(mapStateToProps)(Portfolios)