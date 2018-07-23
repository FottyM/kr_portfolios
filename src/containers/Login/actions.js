import * as type from './constants'

export function requestLogin(email, password) {
  return {
    type: type.REQUEST_LOGIN,
    email,
    password,
    loggedIn: true,
  }
}

export function loginSuccess(response) {
  return {
    type: type.LOGIN_SUCCESS,
    payload: response,
    loggedIn: true,
  }
}

export function loginfailed(error) {
  return {
    type: type.LOGIN_FAILED,
    error,
    loggedIn: false,
  }
}

export function setLoginCredentials(value) {
  return {
    type: type.SET_LOGIN_CREDENTIALS,
    payload: value,
    loggedIn: false,
  }
}
