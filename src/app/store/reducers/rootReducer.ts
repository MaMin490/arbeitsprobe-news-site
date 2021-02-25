import { combineReducers } from 'redux'
import { newsContentReducer } from './authReducer'

const rootReducer = combineReducers({
  newsContent: newsContentReducer,
})

export default rootReducer
