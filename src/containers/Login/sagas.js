import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import get from 'lodash/get'

import { REQUEST_LOGIN } from './constants'
import { loginfailed, loginSuccess } from './actions'

const api = (email, password) => axios.post('http://localhost:3001/auth/login', { user: { email, password } })

function* login(action) {
  try {
    const response = yield call(api, action.email, action.password)
    yield put(loginSuccess(response))
  } catch (error) {

    yield put(loginfailed({
      error: {
        ...get(error.response, 'data', null),
        message: error.message
      }
    }))
  }
}

export function* loginSaga() {
  yield takeEvery(REQUEST_LOGIN, login)
}