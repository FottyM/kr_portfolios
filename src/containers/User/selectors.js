import md5 from 'md5'
import { createSelector } from 'reselect'
import get from 'lodash/get'

const userData = (state) => {
  return state.user.data
}

export const emailHashSelector = createSelector(
  (userData),
  (data) => {
    const emailHash = md5(get(data, ['email'], ' '))
    return emailHash
  }
)