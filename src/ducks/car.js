import { createSelector } from 'reselect'
import { all, call, put, take } from 'redux-saga/effects'
import { appName, apiURL } from '../config'
import request from '../utils/request'

export const moduleName = 'car'
const prefix = `${appName}/${moduleName}`

export const FETCH_CAR_REQUEST = `${prefix}/FETCH_CAR_REQUEST`
export const FETCH_CAR_SUCCESS = `${prefix}/FETCH_CAR_SUCCESS`
export const FETCH_CAR_ERROR = `${prefix}/FETCH_CAR_ERROR`

const initialState = {
  loading: false,
  data: {},
  error: null
}

export const stateSelector = state => state[moduleName]

export default function reducer(state = initialState, action) {
  const { type, payload, error } = action
  switch (type) {
    case FETCH_CAR_REQUEST:
      return { ...state, loading: true, loaded: false }
    case FETCH_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.car,
        error: null
      }
    case FETCH_CAR_ERROR:
      return { ...state, loading: false, loaded: false, error }
    default:
      return state
  }
}

export function fetchCar(stockNumber) {
  return {
    type: FETCH_CAR_REQUEST,
    payload: { stockNumber }
  }
}
export const fetchCarSaga = function*() {
  while (true) {
    const {
      payload: { stockNumber }
    } = yield take(FETCH_CAR_REQUEST)
    const requestURL = `${apiURL}/cars/${stockNumber}`
    try {
      const data = yield call(request, requestURL)
      yield put({
        type: FETCH_CAR_SUCCESS,
        payload: data
      })
    } catch (error) {
      yield put({
        type: FETCH_CAR_ERROR,
        error
      })
    }
  }
}

export const saga = function*() {
  yield all([fetchCarSaga()])
}
