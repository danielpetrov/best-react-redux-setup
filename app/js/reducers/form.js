import Immutable from 'immutable'
import { createSelector } from 'reselect'
import {
    SET_FORM_INPUT_FIELD,
    SET_FORM_INPUT_ERROR,
    SET_FORM_SERVER_ERROR,
    RESET_FORM_INPUT_FIELDS,
    RESET_FORM_INPUT_ERROR,
    RESET_FORM_SERVER_ERROR
} from '../constants/form'
import { FIELDS, VALUE, RESET_STORE } from '../constants/global'
import { NOTIFICATION_TYPE_ERROR } from '../constants/notification'

const mapFieldNamesToInitialState = fieldNames =>
    fieldNames.reduce((acc, fieldName) =>
        acc.setIn(
            [FIELDS, fieldName],
            Immutable.Map({
                value: '',
                error: Immutable.Map({ message: '', hasError: false })
            })
        ), Immutable.Map({
            fields: Immutable.Map({})
        }))

const sampleFieldNames = ['sampleField']

const initialState = Immutable.Map({
    ['sampleForm']: mapFieldNamesToInitialState(sampleFieldNames),
    serverError: Immutable.Map({ message: '', hasError: false })
})

const formReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FORM_INPUT_FIELD: {
            const { formName, inputName, inputValue } = payload

            state = state.setIn([formName, FIELDS, inputName, VALUE], inputValue)
        }
            break
        case SET_FORM_INPUT_ERROR: {
            const { formName, inputName, errorMessage } = payload

            state = state.setIn(
                [formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR],
                state.getIn([formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR]).merge({
                    message: errorMessage,
                    hasError: true
                })
            )
        }
            break
        case SET_FORM_SERVER_ERROR: {
            const { message } = payload

            state = state.set('serverError', Immutable.Map({
                message,
                hasError: true
            }))
        }
            break
        case RESET_FORM_INPUT_FIELDS: {
            const { formName } = payload

            state = state.set(formName, initialState.get(formName))
        }
            break
        case RESET_FORM_INPUT_ERROR: {
            const { formName, inputName } = payload

            state = state.setIn(
                [formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR],
                initialState.getIn([formName, FIELDS, inputName, NOTIFICATION_TYPE_ERROR])
            )
        }
            break
        case RESET_FORM_SERVER_ERROR: {
            state = state.set('serverError', initialState.get('serverError'))
        }
            break
        case RESET_STORE: {
            state = initialState
        }
            break
        default:
            break
    }

    return state
}

export default formReducer

export const inputFieldsSelector = (state, formName) => state.getIn([formName, FIELDS])

export const serverErrorSelector = state => state.get('serverError')

export const hasValidationErrorSelector = createSelector(
    (state, formName) => state.getIn([formName, FIELDS]),
    fields => fields.some(field => field.getIn([NOTIFICATION_TYPE_ERROR, 'hasError']))
)

export const hasEmptyFieldSelector = createSelector(
    (state, formName) => state.getIn([formName, FIELDS]),
    fields => fields.some(field => field.get(VALUE) === '')
)
