import { LOCATION_CHANGE } from 'react-router-redux'
import { RESET_STORE } from '../constants/global'
import getLink from '../utils/getLink'

// This initial state is *copied* from react-router-redux's
// routerReducer (the property name 'locationBeforeTransitions' is
// because this is designed for use with react-router)
const initialState = { locationBeforeTransitions: { pathname: getLink('home') } }

export default function routing(state = initialState, action) {
    // This LOCATION_CHANGE case is copied from react-router-redux's routerReducer
    switch (action.type) {
        case LOCATION_CHANGE:
            state = { ...state, locationBeforeTransitions: action.payload }
            break
        case RESET_STORE:
            state = initialState
            break
    }

    return state
}

export const pathnameSelector = state => state.locationBeforeTransitions.pathname
