import Immutable from 'immutable'
import {
    START_LOADING,
    STOP_LOADING
} from '../constants/loading'

// initial state for loading
const initialState = Immutable.Map({})

// a reducer is a pure function that takes state and action and returns new state without mutating the old one
export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            {
                const { loader } = action.payload

                state = state.set(loader, true)
            }
            break
        case STOP_LOADING:
            {
                const { loader } = action.payload

                state = state.set(loader, false)
            }
            break
        default:
            break
    }

    return state
}

export const isLoadingSelector = (state, loader) => !!state.get(loader)
