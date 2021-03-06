import * as type from './constants'

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  error: null,
  messages: '',
  loading: false
}


const reducer = (state = initialState, action) => {
  switch (action.type) {

  case type.REQUEST_REGISTER:
    return {
      ...state,
      loading: true
    }

  case type.REGISTER_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      messages: { ...action.message }
    }

  case type.REGISTER_FAILED:
    return {
      ...state,
      messages: '',
      loading: false,
      error: action.error
    }

  case type.SET_REGISTER_CREDENTIALS:
    return {
      ...state,
      loading: false,
      ...action.payload
    }

  default:
    return state
  }
}

export default reducer
