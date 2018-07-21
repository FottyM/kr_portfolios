import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import castArray from 'lodash/castArray'

import { REQUEST_USER_PORTFOLIOS, DELETE_PORTFOLIO_REQUEST, } from './constants'
import { portfoliosRequestSuccess, portfoliosRequestError, deletePortfolioSuccess, deletePortfolioError } from './actions'

const fetchPortfolios = (userId, token) => {
  return axios.get(`http://localhost:3001/users/${userId}/portfolios`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

function* getPortfolios(action) {
  try {
    const response = yield call(fetchPortfolios, action.userId, action.token)
    const data = yield castArray(response.data)
    yield put(portfoliosRequestSuccess(data))
  } catch (error) {
    yield put(portfoliosRequestError({ error }))
  }
}

const delProtfolio = (userId, id, token) => {
  return axios.delete(`http://localhost:3001/users/${userId}/portfolios`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

function* deletePortfolio(action) {
  try {
    // debugger
    const response = yield call(delProtfolio, action.user_id, action.id, action.token)
    yield put(deletePortfolioSuccess(response))
  } catch (error) {
    yield put(deletePortfolioError({ error }))
  }
}

export function* getPortfoliosSaga() {
  yield takeEvery(REQUEST_USER_PORTFOLIOS, getPortfolios)
  yield takeEvery(DELETE_PORTFOLIO_REQUEST, deletePortfolio)
  yield takeEvery(DELETE_PORTFOLIO_REQUEST, getPortfolios)
}