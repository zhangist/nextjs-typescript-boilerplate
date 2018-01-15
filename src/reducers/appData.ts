import { Action, AnyAction } from 'redux'
import actionTypes from '../actionTypes'

const initialState = {
  count: 0,
  title: 'Nextjs-Typescript',
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.UPDATE_APPDATA:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
