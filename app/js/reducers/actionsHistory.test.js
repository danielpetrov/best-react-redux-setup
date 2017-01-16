import { Map, List } from 'immutable'
import {
    START_LOADING,
    STOP_LOADING
} from '../constants/loading'
import { startLoading, stopLoading } from '../actions/loading'
import test from 'tape'
import actionsHistoryReducer from './actionsHistory'

test('When calling actionHystory reducer with undefined state and add action with type START_LOADING,' +
    'it must return map with added action', t => {
    const state = actionsHistoryReducer(undefined, startLoading({ loader: 'loader' }))

    t.equal(state.get('allActions').size, 1, 'Amount of actions is correct')
    const action = state.get('allActions').first()

    t.equal(action.type, START_LOADING, 'Type of action is correct')
    t.end()
})

test('When calling actionHystory reducer with state with one action and add action with type STOP_LOADING,' +
    'it must return map with old and new added action', t => {
    const state = Map({ allActions: List.of(stopLoading) })
    const newState = actionsHistoryReducer(state, stopLoading({ loader: 'loader' }))

    t.equal(newState.get('allActions').size, 2, 'Amount of actions is correct')
    const action = newState.get('allActions').last()

    t.equal(action.type, STOP_LOADING, 'Type of action is correct')
    t.end()
})
