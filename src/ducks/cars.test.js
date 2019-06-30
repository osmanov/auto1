import { put } from 'redux-saga/effects'
import reducer, {
  initialState,
  fetchCarsSaga,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_ERROR
} from './cars'

const mock = {
  cars: [
    {
      color: 'yellow',
      fuelType: 'Petrol',
      manufacturerName: 'BMW',
      mileage: {},
      modelName: 'X5',
      pictureUrl: 'http://localhost:3001/car.svg',
      stockNumber: 10025
    }
  ]
}
const state = Object.freeze(initialState)
/**
 * Reducer Tests
 */
it('reducer should get cars', () => {
  const newState = reducer(state, { type: FETCH_CARS_SUCCESS, payload: mock })
  expect(newState).toMatchSnapshot()
})
/**
 * Saga Tests
 */
it('saga should get cars', () => {
  const saga = fetchCarsSaga()
  expect(saga.next().value).toMatchSnapshot()
  expect(saga.next({ payload: { page: 1 } }).value).toMatchSnapshot()
  expect(saga.next(mock).value).toEqual(
    put({
      type: FETCH_CARS_SUCCESS,
      payload: mock
    })
  )

  const error = new Error()

  expect(saga.throw(error).value).toEqual(
    put({
      type: FETCH_CARS_ERROR,
      error
    })
  )
})
