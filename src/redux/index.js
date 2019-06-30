import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}
const enhancer = applyMiddleware(...middleware)
const store = createStore(reducer, enhancer)
window.store = store

sagaMiddleware.run(rootSaga)

export default store
