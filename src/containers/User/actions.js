import * as type from './constants'
import getToken from '../../utils/token'

const { user_id, token, exp } = getToken()

export const requestUserDetails = () => {
  return {
    type: type.REQUEST_USER_DETAILS,
    id: user_id,
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

