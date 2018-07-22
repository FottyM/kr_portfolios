import { put, call, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import castArray from 'lodash/castArray'

import { REQUEST_USER_PORTFOLIOS, DELETE_PORTFOLIO_REQUEST, REQUEST_SAVE_PORTFOLIO, } from './constants'
import { portfoliosRequestSuccess, portfoliosRequestError, deletePortfolioSuccess, deletePortfolioError, savePortfolioError, savePortfolioSuccess } from './actions'

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
    const userID = yield select(state => state.user.data.id)
    const response = yield call(fetchPortfolios, userID, action.token)
    const data = yield castArray(response.data)
    yield put(portfoliosRequestSuccess(data))
  } catch (error) {
    yield put(portfoliosRequestError({ error }))
  }
}

const delProtfolio = (userId, id, token) => {
  return axios.delete(`http://localhost:3001/users/${userId}/portfolios/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}

function* deletePortfolio(action) {
  try {
    const userID = yield select(state => state.user.data.id)
    const response = yield call(delProtfolio, userID, action.id, action.token)
    yield put(deletePortfolioSuccess(response))
  } catch (error) {
    yield put(deletePortfolioError({ error }))
  }
}

const savePort = (userId, data, token) => {
  return axios.post(`http://localhost:3001/users/${userId}/portfolios`,
    { portfolio: { ...data } },
    { headers: { Authorization: `Bearer ${token}` } }
  )
}

function* savePortfolio(action) {
  try {
    const userID = yield select(state => state.user.data.id)
    const response = yield call(savePort, userID, action.data, action.token)
    yield put(savePortfolioSuccess(response.data))
  } catch (error) {
    yield put(savePortfolioError({ error }))
  }
}

export function* getPortfoliosSaga() {
  yield takeEvery(REQUEST_USER_PORTFOLIOS, getPortfolios)
  yield takeEvery(DELETE_PORTFOLIO_REQUEST, deletePortfolio)
  yield takeEvery(DELETE_PORTFOLIO_REQUEST, getPortfolios)
  yield takeEvery(REQUEST_SAVE_PORTFOLIO, savePortfolio)
  yield takeEvery(REQUEST_SAVE_PORTFOLIO, getPortfolios)
}