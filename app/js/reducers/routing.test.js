import test from 'tape'
import routing, {pathnameSelector} from './routing'
import { LOCATION_CHANGE } from 'react-router-redux'
import { resetStore } from '../actions/common'

test('When calling routing reducer with undefined state and action type LOCATION_CHANGE,' +
    'it must return given state', t => {
    const state = routing(undefined, {
        type: LOCATION_CHANGE,
        payload: {
            pathname: '/pods'
        }
    })
    const result = state.locationBeforeTransitions

    t.deepEqual(result, {pathname: '/pods'}, 'Result from the LOCATION_CHANGE is equal to given payload')
    t.end()
})

test('When calling routing reducer with some state and them call action with type RESET_STORE,' +
    'it must return initial state', t => {
    const state = routing(undefined, {
        type: LOCATION_CHANGE,
        payload: {
            pathname: '/vehicles'
        }
    })
    const result = state.locationBeforeTransitions

    t.deepEqual(result, {pathname: '/vehicles'}, 'Result from the state is equal to given payload')

    const newState = routing(state, resetStore())
    const newResult = newState.locationBeforeTransitions

    t.deepEqual(newResult, {pathname: '/home'}, 'Result from the RESET_STORE is equal to initial state')
    t.end()
})

test('When calling routing reducer with some state and call pathnameSelector, it must return given path', t => {
    const state = routing(undefined, {
        type: LOCATION_CHANGE,
        payload: {
            pathname: '/pods'
        }
    })
    const result = pathnameSelector(state)

    t.equal(result, '/pods', 'Result from the pathnameSelector is equal to given path')
    t.end()
})
