import * as type from './constants'

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: null,
  message: '',
  token: null
}

const reducers = (state = initialState, action) => {

  switch (action.type) {
  case type.REQUEST_LOGIN:
    return {
      ...state,
      loading: true
    }

  case type.LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      message: action.message
    }

  case type.LOGIN_FAILED:
    return {
      ...state,
      loading: false,
      error: action.error
    }

  case type.SET_LOGIN_CREDENTIALS:
    return {
      ...state,
      ...action.payload
    }

  default:
    return {
      ...state
    }
  }


}

export default reducers