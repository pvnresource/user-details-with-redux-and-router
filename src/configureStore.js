import { createStore, combineReducers } from 'redux'
import {logs } from './reducers'

export default () => {
  const rootReducer = combineReducers({
    logs
  })

  return createStore(rootReducer)
}