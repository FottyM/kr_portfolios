import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'

import Input from '../../components/Input'
import SelectBox from '../../components/SelectBox'
import Spinner from '../../components/Spinner'
import Alert from '../../components/Alert'
import { setPortfolioData, reqSavePortfolio } from './actions'

class PortfolioForm extends Component {

  static propTypes = {
    portfolios: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  save = (e) => {
    e.preventDefault()
    const { form } = this.props.portfolios
    this.props.dispatch(reqSavePortfolio(form))
  }

  handleChange = ({ target }) => {
    this.props.dispatch(setPortfolioData({ [target.name]: target.value }))
  }

  render() {
    const { form: { amount, wallet_locaion, current_market_value }, loading, message, error
    } = this.props.portfolios
    return (
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 p-4 bg-light rounded mt-3">
          <h4 className='py-2'>Add portfolio</h4>
          <Alert messages={error ? error : message} type={error ? 'danger' : 'success'} />
          <form onChange={this.handleChange} onSubmit={this.save}>
            <Spinner loading={loading}>
              <SelectBox
                name='cryptocurrency'
                id='select-box'
                label='Cryptocurrency'
                options={[
                  { key: '', value: 'choose one' },
                  { key: 'ETH', value: 'Ethereum' },
                  { key: 'BTC', value: 'Bitcoin' },
                  { key: 'XRP', value: 'Ripple' },
                ]}
                onChange={this.handleChange} />

              <Input
                label='Amount' type='number'
                id='amount' name='amount'
                placeholder='10' value={amount}
                onChange={this.handleChange} />

              <Input
                id='wallet-location' label='Wallet location'
                name='wallet_location' placeholder='Wallet Location'
                value={wallet_locaion}
                onChange={this.handleChange} />

              <Input
                id='current_market_value' label='Current market value'
                name='current_market_value'
                value={current_market_value} disabled
                onChange={this.handleChange} />

            </Spinner>
            <button className='btn btn-success' onSubmit={this.save}> Save </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolios: state.portfolios
})



export default connect(mapStateToProps)(PortfolioForm)