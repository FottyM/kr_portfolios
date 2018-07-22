import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import get from 'lodash/get'

import { REQUEST_REGISTER } from './constants'
import { registerSuccess, registerFailed } from './actions'
import { BASE_URL } from '../../config/api'

const api = (email, first_name, last_name, password) => axios.post(`${BASE_URL}/auth/register`, { user: { email, first_name, last_name, password } })

function* register(action) {
  try {
    const response = yield call(api, action.email, action.first_name, action.last_name, action.password)
    yield put(registerSuccess(response.data))
  } catch (error) {
    yield put(registerFailed(
      {
        error: {
          message: error.message,
          error: { ...get(error, ['response', 'data'], null) }
        }
      }))
  }
}


export function* registerSaga() {
  yield takeEvery(REQUEST_REGISTER, register)
}