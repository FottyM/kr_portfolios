import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Input from '../../components/Input'
import SelectBox from '../../components/SelectBox'
import { setPortfolioData, reqSavePortfolio } from './actions'

class PortfolioForm extends Component {

  static propTypes = {
    form: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  save = (e) => {
    e.preventDefault()
    const { form } = this.props
    this.props.dispatch(reqSavePortfolio(form))
  }

  handleChange = ({ target }) => {
    this.props.dispatch(setPortfolioData({ [target.name]: target.value }))
  }

  render() {
    const { amount, wallet_locaion, current_market_value } = this.props.form
    return (
      <form onChange={this.handleChange} onSubmit={this.save}>
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

        <button className='btn btn-success' onSubmit={this.save}> Save </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.portfolios.form
})



export default connect(mapStateToProps)(PortfolioForm)