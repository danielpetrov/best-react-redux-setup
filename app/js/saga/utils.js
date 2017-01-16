import { call, put, take, fork, actionChannel } from 'redux-saga/effects'
import { delay, buffers } from 'redux-saga'
import {
    NOTIFICATION_TYPE_ERROR,
    ERROR_MESSAGE_TITLE,
    UNKNOWN_NETWORK_ERROR,
    MESSAGE_TIMEOUT
} from '../constants/notification'
import { createNotification } from '../utils/utils'

export function* throttle(ms, pattern, task) {
    const throttleChannel = yield actionChannel(pattern, buffers.sliding(1))

    while (true) {
        const action = yield take(throttleChannel)

        yield fork(task, action)
        yield call(delay, ms)
    }
}

export function* handleSagaError({ error, errorActionCreator }) {
    if (errorActionCreator !== undefined) {
        // this can be setServerError for forms
        if (typeof error === 'object') {
            yield put(errorActionCreator({
                type: NOTIFICATION_TYPE_ERROR,
                message: error.message
            }))
        }
    } else {
        yield call(createNotification, {
            type: NOTIFICATION_TYPE_ERROR,
            message: typeof error === 'object' && error.message ? error.message : UNKNOWN_NETWORK_ERROR,
            title: ERROR_MESSAGE_TITLE,
            timeout: MESSAGE_TIMEOUT
        })
    }
}
