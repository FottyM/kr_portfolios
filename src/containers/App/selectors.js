import { createSelector } from 'reselect'

const stateToken = state => state.login.access_token

const localToken = () => {
  try {
    const token = localStorage.getItem('access_token')
    return token
  } catch (error) {
    return null
  }
}

const tokenSelector = createSelector(
  stateToken, localToken,
  (stateToken, localToken) => stateToken ? stateToken : localToken
)

export { tokenSelector }