import * as type from './constants'
import getToken from '../../utils/token'

const { user_id, token, exp } = getToken()

export function requestPortfolios() {
  return {
    type: type.REQUEST_USER_PORTFOLIOS,
    userId: user_id,
    token: token
  }
}

export function portfoliosRequestSuccess(portfolios) {
  return {
    type: type.PORTFOLIOS_REQUEST_SUCCESS,
    payload: portfolios
  }
}

export function portfoliosRequestError(error) {
  return {
    type: type.PORTFOLIOS_REQUEST_FAILED,
    error
  }
}

export function deletePortfolioRequest(id) {
  return {
    type: type.DELETE_PORTFOLIO_REQUEST,
    user_id,
    id,
    token
  }
}

export function deletePortfolioSuccess(message) {
  return {
    type: type.DELETE_PORTFOLIO_SUCCESS,
    message
  }
}

export function deletePortfolioError(error) {
  return {
    type: type.DELETE_PORTFOLIO_ERROR,
    error
  }
}

export function reqSavePortfolio(data) {
  return {
    type: type.REQUEST_SAVE_PORTFOLIO,
    data,
    user_id,
    token
  }
}

export function savePortfolioSuccess(message) {
  return {
    type: type.PORTFOLIO_SAVED_SUCCESS,
    ...message
  }
}

export function savePortfolioError(error) {
  return {
    type: type.PORTFOLIO_SAVED_FAILED,
    error
  }
}

export function setPortfolioData(val) {
  return {
    type: type.SET_PORTFOLIO_DATA,
    val
  }
}