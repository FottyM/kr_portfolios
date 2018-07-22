import * as type from './constants'

export function requestRegister({ email, password, first_name, last_name }) {
  return {
    type: type.REQUEST_REGISTER,
    email,
    password,
    first_name,
    last_name
  }
}

export function registerSuccess(message) {
  return {
    type: type.REGISTER_SUCCESS,
    ...message
  }
}

export function registerFailed(error) {
  return {
    type: type.REGISTER_FAILED,
    error
  }
}

export function setRegisterCredentails(val) {
  return {
    type: type.SET_REGISTER_CREDENTIALS,
    payload: val
  }
}