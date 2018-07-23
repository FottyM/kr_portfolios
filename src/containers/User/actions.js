import * as type from './constants'
import getToken from '../../utils/token'

const { user_id, token } = getToken()

export const requestUserDetails = (user_id) => {
  return {
    type: type.REQUEST_USER_DETAILS,
    user_id,
    token: token
  }
}

export const requestUserDetailsSuccess = (user) => {
  return {
    type: type.REQUEST_USER_DETAILS_SUCCESS,
    payload: { ...user }
  }
}

export const requestUserDetailsFail = (error) => {
  return {
    type: type.REQUEST_USER_DETAILS_FAILED,
    error
  }
}

