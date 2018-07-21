import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { REQUEST_USER_DETAILS } from './constants'
import { requestUserDetailsSuccess, requestUserDetailsFail } from './actions'

const getUser = (id, token) => axios.get(`http://localhost:3001/users/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

function* getUserDetails(actoion) {
  try {
    const response = yield call(getUser, actoion.id, actoion.token)
    yield put(requestUserDetailsSuccess(response.data))
  } catch (error) {
    yield put(requestUserDetailsFail({ error }))
  }
}

export function* userSaga() {
  yield takeEvery(REQUEST_USER_DETAILS, getUserDetails)
}