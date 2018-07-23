import { createSelector } from 'reselect'
import decode from 'jwt-decode'

const stateToken = state => state.login.access_token

const localToken = () => {
  try {
    const token = localStorage.getItem('access_token')
    return token
  } catch (error) {
    return null
  }
}

export const tokenSelector = createSelector(
  stateToken, localToken,
  (stateToken, localToken) => stateToken ? stateToken : localToken
)

export const userIdSelector = createSelector(
  tokenSelector, (token) => {
    const { user_id } = decode(token)
    return user_id ? user_id : null
  }
)
