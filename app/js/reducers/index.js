import { combineReducers } from 'redux'
import loading, * as fromLoading from './loading'
import routing, * as fromRouting from './routing'
import form, * as fromForm from './form'
import actionsHistory from './actionsHistory'
import { isTesting } from '../utils/utils'

const allReducers = {
    loading,
    routing,
    form
}

if (isTesting()) {
    allReducers.actionsHistory = actionsHistory
}

const rootReducer = combineReducers(allReducers)

export default rootReducer

/* loaders selectors start */
export const isLoadingSelector = (state, loader) => fromLoading.isLoadingSelector(state.loading, loader)
/* loaders selectors end */

/* routing selectors start */
export const routingPathnameSelector = state =>
    fromRouting.pathnameSelector(state.routing)
/* routing selectors end */

/* form selectors start */
export const formInputFieldsSelector = (state, formName) => fromForm.inputFieldsSelector(state.form, formName)

export const formServerErrorSelector = state => fromForm.serverErrorSelector(state.form)

export const formHasValidationErrorSelector = (state, formName) =>
    fromForm.hasValidationErrorSelector(state.form, formName)

export const formHasEmptyFieldSelector = (state, formName) => fromForm.hasEmptyFieldSelector(state.form, formName)
/* form selectors end */
