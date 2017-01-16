import { RESET_STORE } from '../constants/global'

export const resetStore = () => ({
    type: RESET_STORE,
    payload: {}
})
