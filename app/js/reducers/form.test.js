import test from 'tape'
import { Map } from 'immutable'
import {
    setFormInputField,
    setFormInputError,
    setFormServerError,
    resetFormInputFields,
    resetFormInputError,
    resetFormServerError
} from '../actions/form'
import formReducer, { serverErrorSelector } from './form'
import { FIELDS, VALUE } from '../constants/global'
import { NOTIFICATION_TYPE_ERROR } from '../constants/notification'

// If you delete 'sampleForm' and 'sampleField' from form.js reducer this tests will throw an error
// To correct that replace form/field with your own implementation. Reducer cases are generic. If it works with one,
// it will work with all.

test('When calling Form reducer with undefined state and action type SET_FORM_INPUT_FIELD,' +
    'it must return correct inputValue', t => {
    const params = {
        formName: 'sampleForm',
        inputName: 'sampleField',
        inputValue: 15
    }
    const { formName, inputName, inputValue } = params
    const state = formReducer(undefined, setFormInputField(params))
    const result = state.getIn([formName, FIELDS, inputName, VALUE])

    t.ok(state.hasIn([formName]), 'FormName is exist in the state')
    t.ok(state.hasIn([formName, FIELDS, inputName]), 'InputName is exist in the state')
    t.equal(result, inputValue, 'Value from the state is equal to inputValue')
    t.end()
})

test('When calling Form reducer with undefined state and action type SET_FORM_INPUT_ERROR,' +
    'it must return correct errorMessage', t => {
    const params = {
        formName: 'sampleForm',
        inputName: 'sampleField',
        errorMessage: 'No such podId'
    }
    const { formName, inputName, errorMessage } = params
    const state = formReducer(undefined, setFormInputError(params))
    const result = state.getIn([formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR])

    t.ok(state.hasIn([formName]), 'FormName is exist in the state')
    t.ok(state.hasIn([formName, FIELDS, inputName]), 'InputName is exist in the state')
    t.equal(result.get('message'), errorMessage, 'Message from the state is equal to errorMessage')
    t.equal(result.get('hasError'), true, 'HasError property the state must be true')
    t.end()
})

test('When calling Form reducer with undefined state and action type SET_FORM_SERVER_ERROR,' +
    'it must return correct message', t => {
    const params = {
        formName: 'sampleForm',
        message: 'No such podId'
    }
    const { message } = params
    const state = formReducer(undefined, setFormServerError(params))
    const result = state.get('serverError')

    t.equal(result.get('message'), message, 'Message from the state is equal to errorMessage')
    t.equal(result.get('hasError'), true, 'HasError property the state must be true')
    t.end()
})

test('When create some state and calling Form reducer with it and action type RESET_FORM_INPUT_FIELDS,' +
    'it must return correct inputValue', t => {
    const params = {
        formName: 'sampleForm',
        inputName: 'sampleField',
        inputValue: 15
    }
    const { formName, inputName, inputValue } = params
    const state = formReducer(undefined, setFormInputField(params))
    const result = state.getIn([formName, FIELDS, inputName, VALUE])

    t.ok(state.hasIn([formName]), 'FormName is exist in the state')
    t.ok(state.hasIn([formName, FIELDS, inputName]), 'InputName is exist in the state')
    t.equal(result, inputValue, 'Value from the state is equal to inputValue')

    const newState = formReducer(state, resetFormInputFields({ formName: formName }))
    const newResult = newState.getIn([formName, FIELDS, inputName, VALUE])

    t.equal(newResult, '', 'State is reset and value is empty')
    t.end()
})

test('When create some state and calling Form reducer with it and action type RESET_FORM_INPUT_ERROR,' +
    'it must return correct errorMessage', t => {
    const params = {
        formName: 'sampleForm',
        inputName: 'sampleField',
        errorMessage: 'No such podId'
    }
    const { formName, inputName, errorMessage } = params
    const state = formReducer(undefined, setFormInputError(params))
    const result = state.getIn([formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR])

    t.ok(state.hasIn([formName]), 'FormName is exist in the state')
    t.ok(state.hasIn([formName, FIELDS, inputName]), 'InputName is exist in the state')
    t.equal(result.get('message'), errorMessage, 'Message from the state is equal to errorMessage')
    t.equal(result.get('hasError'), true, 'HasError property the state must be true')

    const newState = formReducer(state, resetFormInputError({ formName: formName, inputName: inputName }))
    const newResult = newState.getIn([formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR])

    t.equal(newResult.get('message'), '', 'State is reset and value is empty')
    t.equal(newResult.get('hasError'), false, 'State is reset and hasError property must be false')
    t.end()
})

test('When create some state and calling Form reducer with it and action type RESET_FORM_SERVER_ERROR,' +
    'it must return correct message', t => {
    const params = {
        formName: 'sampleForm',
        message: 'No such podId'
    }
    const {message} = params
    const state = formReducer(undefined, setFormServerError(params))
    const result = state.get('serverError')

    t.equal(result.get('message'), message, 'Message from the state is equal to errorMessage')
    t.equal(result.get('hasError'), true, 'HasError property the state must be true')

    const newState = formReducer(state, resetFormServerError({}))
    const newResult = newState.get('serverError')

    t.equal(newResult.get('message'), '', 'State is reset and value is empty')
    t.equal(newResult.get('hasError'), false, 'State is reset and hasError property must be false')
    t.end()
})

test('When create some state and calling serverErrorSelector from Form reducer, it must return serverError', t => {
    const initialState = Map({
        serverError: Map({message: 'No such pod', hasError: true})
    })
    const state = serverErrorSelector(initialState)

    t.equal(state.get('message'), 'No such pod', 'Message from the state is equal to No such pod')
    t.equal(state.get('hasError'), true, 'HasError property the state must be true')
    t.end()
})
