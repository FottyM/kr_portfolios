import * as type from './constants'

const initialState = {
  data: [],
  error: null,
  message: '',
  loading: false
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
      message: action.message
    }
  case type.DELETE_PORTFOLIO_ERROR:
    return {
      ...state,
      loading: true,
      error: action.error
    }

  default:
    return state
  }
}

export default reducers
