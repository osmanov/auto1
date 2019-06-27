import { saga as carsSaga } from '../ducks/cars'
import { saga as carSaga } from '../ducks/car'
import { saga as propertiesSaga } from '../ducks/properties'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([carsSaga(), carSaga(), propertiesSaga()])
}
