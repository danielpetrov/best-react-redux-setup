import { Map } from 'immutable'
import { startLoading, stopLoading } from '../actions/loading'
import test from 'tape'
import Loading, { isLoadingSelector } from './loading'

test('When calling Loading reducer with undefined state and action type START_LOADING,' +
    'it must return loader equal to true', t => {
    const state = Loading(undefined, startLoading({ loader: 'loader' }))

    t.equal(state.get('loader'), true, 'Loader is true')
    t.end()
})

test('When calling Loading reducer with undefined state and action type STOP_LOADING,' +
    'it must return loader equal to false', t => {
    const state = Loading(undefined, stopLoading({ loader: 'loader' }))

    t.equal(state.get('loader'), false, 'Loader is not false')
    t.end()
})

test('When calling Loading reducer with some state and action type START_LOADING,' +
    'it must return loader equal to true', t => {
    const state = Loading(Map({ page: 1, loader: false }), startLoading({ loader: 'loader' }))

    t.equal(state.get('loader'), true, 'Loader is true')
    t.end()
})

test('When calling Loading reducer with some state and action type STOP_LOADING,' +
    'it must return loader equal to false', t => {
    const state = Loading(Map({ page: 1, loader: true }), stopLoading({ loader: 'loader' }))

    t.equal(state.get('loader'), false, 'Loader is not false')
    t.end()
})

test('When calling isLoadingSelector with some state with loader true, it must return true', t => {
    const result = isLoadingSelector(Map({ page: 1, 'loader': true }), 'loader')

    t.equal(result, true, 'Loader is true')
    t.end()
})

test('When calling isLoadingSelector with some state with loader false, it must return false', t => {
    const result = isLoadingSelector(Map({ page: 1, 'loader': false }), 'loader')

    t.equal(result, false, 'Loader is not false')
    t.end()
})

