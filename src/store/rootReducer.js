import { combineReducers } from 'redux'

import login from '../containers/Login/reducer'
import register from '../containers/Register/reducer'
import portfolios from '../containers/Portfolios/reducers'
import user from '../containers/User/reducers'

const rootReducers = combineReducers({ login, register, portfolios, user })

export default rootReducers