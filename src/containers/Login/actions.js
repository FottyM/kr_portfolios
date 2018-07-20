import * as type from './constants'

export function requestLogin(email, password) {
  return {
    type: type.REQUEST_LOGIN,
    email,
    password
  }
}

export function loginSuccess(message) {
  return {
    type: type.LOGIN_SUCCESS,
    message
  }
}

export function loginfailed(error) {
  return {
    type: type.LOGIN_FAILED,
    error
  }
}

export function setCredentials({ email, password }) {
  return {
    type: type.SET_USER_CREDENTIALS,
    email,
    password
  }
}
