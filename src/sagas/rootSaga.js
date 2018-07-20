import { all } from 'redux-saga/effects'
import { loginSaga } from '../containers/Login/sagas'

export default function* rootSaga() {
  yield all([
    loginSaga()
  ])
}