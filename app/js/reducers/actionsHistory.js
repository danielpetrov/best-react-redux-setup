import Immutable from 'immutable'

const initialState = Immutable.Map({
    allActions: Immutable.List()
})

const actionsHistoryReducer = (state = initialState, action) =>
    state.set('allActions', state.get('allActions').push(action))

export default actionsHistoryReducer
