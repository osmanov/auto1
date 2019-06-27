import { createSelector } from 'reselect'
import { all, call, put, take } from 'redux-saga/effects'
import { appName, apiURL } from '../config'
import request from '../utils/request'

export const moduleName = 'cars'
const prefix = `${appName}/${moduleName}`

export const FETCH_CARS_REQUEST = `${prefix}/FETCH_CARS_REQUEST`
export const FETCH_CARS_SUCCESS = `${prefix}/FETCH_CARS_SUCCESS`
export const FETCH_CARS_ERROR = `${prefix}/FETCH_CARS_ERROR`

const initialState = {
  loading: false,
  data: [],
  error: null
}

export const stateSelector = state => state[moduleName]

export default function reducer(state = initialState, action) {
  const { type, payload, error } = action
  switch (type) {
    case FETCH_CARS_REQUEST:
      return { ...state, loading: true, loaded: false }
    case FETCH_CARS_SUCCESS:
      const { cars, ...other } = payload
      return {
        ...state,
        ...other,
        loading: false,
        data: payload.cars,
        error: null
      }
    case FETCH_CARS_ERROR:
      return { ...state, loading: false, error }
    default:
      return state
  }
}

export function fetchCars({ sort = 'asc', page = 1 } = {}) {
  return {
    type: FETCH_CARS_REQUEST,
    payload: { sort, page }
  }
}
export const fetchCarsSaga = function*() {
  while (true) {
    const action = yield take(FETCH_CARS_REQUEST)
    console.log({ action })
    const sort = ''
    const page = ''
    const requestURL = `${apiURL}/cars?sort=${sort}&page=${page}`
    try {
      const data = yield call(request, requestURL)
      yield put({
        type: FETCH_CARS_SUCCESS,
        payload: data
      })
    } catch (error) {
      yield put({
        type: FETCH_CARS_ERROR,
        error
      })
    }
  }
}

export const saga = function*() {
  yield all([fetchCarsSaga()])
}
