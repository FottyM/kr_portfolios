import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { REQUEST_CONVERSIONS } from './constants'
import { conversionsSuccess, conversionsError } from './actions'

const cryptoApi = axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=10')

function* getConversion() {
  try {
    const cryptos = yield call(cryptoApi)
    console.log(cryptos, '=============......krypiiiieeesss')

    yield put(conversionsSuccess(cryptos.data))
  } catch (error) {
    yield put(conversionsError(error))
  }
}

export function* cryptoSaga() {
  yield takeEvery(REQUEST_CONVERSIONS, getConversion)
}