import { put } from 'redux-saga/effects'
import reducer, {
  initialState,
  fetchPropertiesSaga,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_ERROR
} from './properties'

import { fetchCars } from './cars'

const mock = {
  colors: ['red', 'blue', 'green'],
  manufacturers: [{ models: { name: 'Avenger' }, name: 'Dodge' }]
}
const state = Object.freeze(initialState)
/**
 * Reducer Tests
 */
it('reducer should get properties', () => {
  const newState = reducer(state, {
    type: FETCH_PROPERTIES_SUCCESS,
    payload: mock
  })
  expect(newState).toMatchSnapshot()
})
/**
 * Saga Tests
 */
it('saga should get properties and start fetch cars', () => {
  const saga = fetchPropertiesSaga()
  expect(saga.next().value).toMatchSnapshot()
  expect(saga.next(mock).value).toMatchSnapshot()
  const data = [mock.colors, mock.manufacturers]
  const allDescriptor = saga.next([data]).value
  expect(allDescriptor).toMatchSnapshot()
  expect(saga.next().value).toEqual(put(fetchCars()))
})

it('saga should not get properties', () => {
  const saga = fetchPropertiesSaga()
  expect(saga.next().value).toMatchSnapshot()
  expect(saga.next(mock).value).toMatchSnapshot()
  const error = new Error()
  expect(saga.throw(error).value).toEqual(
    put({
      type: FETCH_PROPERTIES_ERROR,
      error
    })
  )
})
