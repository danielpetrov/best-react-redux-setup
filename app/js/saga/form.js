import { put, call, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { goBack } from 'react-router-redux'
import { resetFormInputFields, setFormServerError } from '../actions/form'
import { startLoading, stopLoading } from '../actions/loading'
import { handleSagaError } from './utils'

function* onSubmitSomeForm({ payload: { name } }) {
    try {
        yield put(startLoading({ loader: 'IS_SOME_FORM_SUBMITTING' }))

        yield put(goBack())
        yield put(resetFormInputFields({ formName: 'SOME_FORM' }))
    } catch (error) {
        yield call(handleSagaError, { error, errorMapping: 'search', errorActionCreator: setFormServerError })
    } finally {
        yield put(stopLoading({ loader: 'IS_SOME_FORM_SUBMITTING' }))
    }
}

function* watchSubmitSomeForm() {
    yield* takeLatest('SUBMIT_SOME_FORM', onSubmitSomeForm)
}

export default function* formSaga() {
    yield [
        watchSubmitSomeForm()
    ]
}
