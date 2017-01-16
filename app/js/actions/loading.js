import {
    START_LOADING,
    STOP_LOADING
} from '../constants/loading'

export const startLoading = ({ loader }) => ({
    type: START_LOADING,
    payload: {
        loader
    }
})

export const stopLoading = ({ loader }) => ({
    type: STOP_LOADING,
    payload: {
        loader
    }
})
