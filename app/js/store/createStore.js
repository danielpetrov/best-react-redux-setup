/* eslint-env browser */
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'
import rootSaga from '../saga'

export default function configureStore() {
    let middlewares = []
    let enhancers = []

    const sagaMiddleware = createSagaMiddleware()

    middlewares.push(sagaMiddleware, routerMiddleware(browserHistory))
    enhancers.push(applyMiddleware(...middlewares))

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const storeEnhancers = composeEnhancers(...enhancers)
    const store = createStore(rootReducer, storeEnhancers)

    sagaMiddleware.run(rootSaga)

    return store
}
