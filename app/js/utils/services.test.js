import test from 'tape'
import { successCallback, errorCallback } from './services'
import { ParseGlobalNetworkError } from '../utils/utils'
import { UNKNOWN_NETWORK_ERROR } from '../constants/notification'

test('When calling successCallback of services with valid json result it should return object', t => {
    const response = {
        headers: {
            'content-type': ['application/json']
        },
        data: {
            sample: ''
        }
    }
    const resolve = data => {
        t.deepEqual(data, { sample: '' }, 'Response data not match to data from server')
    }
    const reject = error => {
        t.fail('SuccessCallback fail with error: ' + error + ', but it must success')
    }

    successCallback(resolve, reject)(response)
    t.end()
})

test('When calling successCallback of services with valid spreedsheet content-Type it should return given response',
    t => {
        const response = {
            headers: {
                'content-type': ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
            },
            result: 'some sheet'
        }
        const resolve = data => {
            t.deepEqual(data.result, 'some sheet', 'Data not match to response')
        }
        const reject = error => {
            t.fail(error)
        }

        successCallback(resolve, reject)(response)
        t.end()
    })

test('When calling successCallback of services with not match contentType it should return UNKNOWN_NETWORK_ERROR',
    t => {
        const response = {
            headers: {
                'content-type': []
            },
            data: {
                resultsMap: {
                    result: 'someResult'
                }
            }
        }
        const resolve = data => {
            t.fail('Data ' + data + 'is valid but it must fail')
        }
        const reject = error => {
            t.deepEqual(error, { message: ParseGlobalNetworkError({ errorCode: UNKNOWN_NETWORK_ERROR }) })
        }

        successCallback(resolve, reject)(response)
        t.end()
    })

test('When calling errorCallback of services with error it should not throw exception and return valid message', t => {
    const mockedError = {
        response: {
            status: 501
        }
    }
    const reject = message => {
        t.deepEqual(message, {
            message: ParseGlobalNetworkError({
                errorCode: mockedError.response.status
            })
        }, 'Reject with error with response and status')
    }

    t.doesNotThrow(() => errorCallback(reject)(mockedError), 'Exception in reject with error with response and status')
    t.end()
})

test('When calling errorCallback of services with error it should not throw exception and return valid message', t => {
    const reject = message => {
        t.deepEqual(message, {
            message: ParseGlobalNetworkError({
                errorCode: UNKNOWN_NETWORK_ERROR
            })
        }, 'Reject with empty error object')
    }

    t.doesNotThrow(() => errorCallback(reject)({}), 'Exception in reject with error with empty error object')
    t.end()
})

test('When calling errorCallback of services with error it should not throw exception and return valid message', t => {
    const reject = message => {
        t.deepEqual(message, {
            message: ParseGlobalNetworkError({
                errorCode: UNKNOWN_NETWORK_ERROR
            })
        }, 'Reject with empty string')
    }

    t.doesNotThrow(() => errorCallback(reject)({ response: '' }), 'Exception in reject with empty string')
    t.end()
})

test('When calling errorCallback of services with error it should not throw exception and return valid message', t => {
    const reject = message => {
        t.deepEqual(message, {
            message: ParseGlobalNetworkError({
                errorCode: UNKNOWN_NETWORK_ERROR
            })
        }, 'Reject with undefined error')
    }

    t.doesNotThrow(() => errorCallback(reject)({ response: undefined }), 'Exception in reject with undefined error')
    t.end()
})
