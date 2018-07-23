import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import get from 'lodash/get'

import { REQUEST_LOGIN } from './constants'
import { loginfailed, loginSuccess } from './actions'
import { BASE_URL } from '../../config/api'

export const loginApi = (email, password) => axios.post(`${BASE_URL}/auth/login`, { user: { email, password } })

export function* login(action) {
  try {
    const response = yield call(loginApi, action.email, action.password)
    const { access_token } = response.data
    yield localStorage.setItem('access_token', access_token)
    yield put(loginSuccess(response.data))
  } catch (error) {
    yield put(loginfailed({
      error: {
        ...get(error, ['response', 'data'], null),
        message: error.message
      }
    }))
  }
}

export function* loginSaga() {
  yield takeLatest(REQUEST_LOGIN, login)
}