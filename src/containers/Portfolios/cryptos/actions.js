import * as type from './constants'

export function reqConversions() {
  return {
    type: type.REQUEST_CONVERSIONS
  }
}

export function conversionsSuccess(data) {
  return {
    type: type.CONVERSIONS_SUCCESS,
    payload: { data }
  }
}

export function conversionsError(error) {
  return {
    type: type.CONVERSIONS_ERROR,
    payload: { error }
  }
}