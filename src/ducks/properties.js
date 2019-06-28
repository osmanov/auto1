import { createSelector } from 'reselect'
import { all, call, put, take } from 'redux-saga/effects'
import { fetchCars } from './cars'
import { appName, apiURL } from '../config'
import request from '../utils/request'

export const moduleName = 'properties'
const prefix = `${appName}/${moduleName}`

export const FETCH_PROPERTIES_REQUEST = `${prefix}/FETCH_PROPERTIES_REQUEST`
export const FETCH_PROPERTIES_SUCCESS = `${prefix}/FETCH_PROPERTIES_SUCCESS`
export const FETCH_PROPERTIES_ERROR = `${prefix}/FETCH_PROPERTIES_ERROR`

const initialState = {
  loading: false,
  data: {},
  error: null
}

export const stateSelector = state => state[moduleName]

export default function reducer(state = initialState, action) {
  const { type, payload, error } = action
  switch (type) {
    case FETCH_PROPERTIES_REQUEST:
      return { ...state, loading: true, loaded: false }
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: payload,
        error: null
      }
    case FETCH_PROPERTIES_ERROR:
      return { ...state, loading: false, loaded: false, error }
    default:
      return state
  }
}

export function fetchProperties() {
  return {
    type: FETCH_PROPERTIES_REQUEST
  }
}
export const fetchPropertiesSaga = function*() {
  while (true) {
    yield take(FETCH_PROPERTIES_REQUEST)
    const requestColorURL = `${apiURL}/colors`
    const requestManufacturersURL = `${apiURL}/manufacturers`
    try {
      const [colors, manufacturers] = yield all([
        call(request, requestColorURL),
        call(request, requestManufacturersURL)
      ])

      yield put({
        type: FETCH_PROPERTIES_SUCCESS,
        payload: { ...colors, ...manufacturers }
      })
    } catch (error) {
      yield put({
        type: FETCH_PROPERTIES_ERROR,
        error
      })
    }
    yield put(fetchCars())
  }
}

export const saga = function*() {
  yield all([fetchPropertiesSaga()])
}
