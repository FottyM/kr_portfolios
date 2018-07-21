import * as type from './constants'

const initialState = {
  data: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

  case type.REQUEST_USER_DETAILS:
    return {
      ...state,
      loading: true
    }

  case type.REQUEST_USER_DETAILS_SUCCESS:
    return {
      ...state,
      loading: false,
      data: { ...action.payload }
    }

  case type.REQUEST_USER_DETAILS_FAILED:
    return {
      ...state,
      loading: false,
      error: { ...action.payload }
    }

  default:
    return state
  }
}
