import moment from 'moment'

import * as type from './constants'


const initialState = {
  data: [],
  error: null,
  messages: '',
  loading: false,
  form: {
    cryptocurrency: null,
    amount: null,
    date_of_purchase: moment(),
    wallet_location: '',
    current_market_value: 'ask api'
  }
}

const reducers = (state = initialState, action) => {
  switch (action.type) {

  case type.PORTFOLIOS_REQUEST_SUCCESS:
    return {
      ...state,
      data: [...action.payload],
      loading: false,
      error: null
    }

  case type.PORTFOLIOS_REQUEST_FAILED:
    return {
      ...state,
      ...action.error,
      loading: false,
    }

  case type.REQUEST_USER_PORTFOLIOS:
    return {
      ...state,
      loading: true
    }

  case type.DELETE_PORTFOLIO_REQUEST:
    return {
      ...state,
      loading: true
    }

  case type.DELETE_PORTFOLIO_SUCCESS:
    return {
      ...state,
      loading: false,
      messages: { message: action.message }
    }

  case type.DELETE_PORTFOLIO_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error
    }
  case type.REQUEST_SAVE_PORTFOLIO:
    return {
      ...state,
      loading: true,
    }

  case type.PORTFOLIO_SAVED_FAILED:
    return {
      ...state,
      loading: false,
      error: action.error
    }

  case type.PORTFOLIO_SAVED_SUCCESS:
    return {
      ...state,
      loading: false,
      messages: { ...action.message }
    }

  case type.SET_PORTFOLIO_DATA:
    return {
      ...state,
      loading: false,
      form: {
        ...state.form,
        ...action.val
      }
    }

  default:
    return state
  }
}

export default reducers
