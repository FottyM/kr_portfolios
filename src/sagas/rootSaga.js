import { all } from 'redux-saga/effects'
import { loginSaga } from '../containers/Login/sagas'
import { registerSaga } from '../containers/Register/sagas'
import { getPortfoliosSaga } from '../containers/Portfolios/sagas'
import { userSaga } from '../containers/User/sagas'
import { cryptoSaga } from '../containers/Portfolios/cryptos/sagas'

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    getPortfoliosSaga(),
    userSaga(),
    cryptoSaga()
  ])
}