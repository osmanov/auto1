import { createSelector } from 'reselect'
import { all, call, put, take } from 'redux-saga/effects'
import { appName, apiURL } from '../config'
import request from '../utils/request'

export const moduleName = 'cars'
const prefix = `${appName}/${moduleName}`

export const FETCH_CARS_REQUEST = `${prefix}/FETCH_CARS_REQUEST`
export const FETCH_CARS_SUCCESS = `${prefix}/FETCH_CARS_SUCCESS`
export const FETCH_CARS_ERROR = `${prefix}/FETCH_CARS_ERROR`

export const initialState = {
  loading: false,
  data: [],
  error: null,
  sort: null,
  filter: null,
  totalPageCount: 0
}

export const stateSelector = state => state[moduleName]
export const filterSelector = state => state[moduleName].filter
export const totalPageCountSelector = state => state[moduleName].totalPageCount
export const sortSelector = state => state[moduleName].sort

export const currentPageSelector = createSelector(
  filterSelector,
  filter => {
    return filter ? filter.page : 1
  }
)

export const paginatorParamsSelector = createSelector(
  currentPageSelector,
  totalPageCountSelector,
  filterSelector,
  sortSelector,
  (current, totalCount, filter, sort) => {
    const nextCandidate = current + 1
    const prevCandidate = current - 1

    return {
      next: totalCount >= nextCandidate ? nextCandidate : null,
      prev: prevCandidate || null,
      current,
      first: 1,
      last: totalCount,
      sort,
      filter: filter || {}
    }
  }
)
export const buildURL = params => {
  return Object.keys(params).reduce((acc, param) => {
    return params[param] ? `${acc}&${param}=${params[param]}` : acc
  }, `${apiURL}/cars?`)
}

export default function reducer(state = initialState, action) {
  const { type, payload, error } = action
  switch (type) {
    case FETCH_CARS_REQUEST:
      const { sort, ...filter } = payload
      return { ...state, loading: true, sort, filter }
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

export function fetchCars({ sort, page = 1, manufacturer, color } = {}) {
  return {
    type: FETCH_CARS_REQUEST,
    payload: { sort, page, manufacturer, color }
  }
}
export const fetchCarsSaga = function*() {
  while (true) {
    const { payload } = yield take(FETCH_CARS_REQUEST)
    const requestURL = Object.keys(payload).reduce((acc, param) => {
      return payload[param] ? `${acc}&${param}=${payload[param]}` : acc
    }, `${apiURL}/cars?`)

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
