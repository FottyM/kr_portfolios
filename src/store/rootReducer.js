import { combineReducers } from 'redux'
import login from '../containers/Login/reducer'
import register from '../containers/Register/reducer'

const rootReducers = combineReducers({ login, register })

export default rootReducers