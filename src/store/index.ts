import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'

export default (initialState = {}) => {
  return createStore(reducers, initialState, applyMiddleware(thunkMiddleware))
}
