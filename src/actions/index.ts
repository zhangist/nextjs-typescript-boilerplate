import { Dispatch } from 'redux'
import actionTypes from '../actionTypes'

const updateAppData = (data: any) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({ type: actionTypes.UPDATE_APPDATA, data })
  }
}

export default {
  updateAppData,
}
