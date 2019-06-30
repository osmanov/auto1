import { put } from 'redux-saga/effects'
import reducer, {
  initialState,
  fetchCarSaga,
  FETCH_CAR_SUCCESS,
  FETCH_CAR_ERROR
} from './car'

const mock = {
  car: [
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
it('reducer should get car', () => {
  const newState = reducer(state, { type: FETCH_CAR_SUCCESS, payload: mock })
  expect(newState).toMatchSnapshot()
})
/**
 * Saga Tests
 */
it('saga should get cars', () => {
  const saga = fetchCarSaga()
  expect(saga.next().value).toMatchSnapshot()
  expect(saga.next({ payload: { stockNumber: 10025 } }).value).toMatchSnapshot()
  expect(saga.next(mock).value).toEqual(
    put({
      type: FETCH_CAR_SUCCESS,
      payload: mock
    })
  )

  const error = new Error()

  expect(saga.throw(error).value).toEqual(
    put({
      type: FETCH_CAR_ERROR,
      error
    })
  )
})
