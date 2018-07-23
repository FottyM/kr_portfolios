import * as type from './constants'

const initialState = {
  data: [],
  messages: '',
  error: null

}

export default (state = initialState, action) => {
  switch (action.type) {

  case type.REQUEST_CONVERSIONS:
    return {
      ...state,
      loading: true
    }

  case type.CONVERSIONS_SUCCESS:
    return {
      ...state,
      ...action.payload
    }

  case type.CONVERSIONS_ERROR:
    return {
      ...state,
      ...action.payload
    }

  default:
    return state
  }
}
