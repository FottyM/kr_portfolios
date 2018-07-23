import assert from 'assert'
import { put, call } from 'redux-saga/effects'
import { loginfailed } from '../actions'
import { login } from '../sagas'

describe('login sagas', () => {
  let loginApi
  beforeEach(() => {
    loginApi = sinon.spy()
  })

  afterEach(() => {
    loginApi.restaure()
  })

  it('should return request login ', () => {
    assert.deepEqual(login().next().value, call(loginApi, 'me@me.com', '123456'))
  })
  it('should return request login success ')
  it('should return request login error ')
  it('should be finished ')
})
