import { all } from 'redux-saga/effects'
import { loginSaga } from '../containers/Login/sagas'
import { registerSaga } from '../containers/Register/saga'

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga()
  ])
}