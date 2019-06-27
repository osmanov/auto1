import { combineReducers } from 'redux'
import carsReducer, { moduleName as carsModule } from '../ducks/cars'
import carReducer, { moduleName as carModule } from '../ducks/car'
import propertiesReducer, {
  moduleName as propertiesModule
} from '../ducks/properties'

export default combineReducers({
  [carsModule]: carsReducer,
  [carModule]: carReducer,
  [propertiesModule]: propertiesReducer
})
