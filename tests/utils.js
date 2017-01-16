import React from 'react'
import { mount } from 'enzyme'
import { push } from 'react-router-redux'
import { configureStoreWithBrowserHistory, createRoot } from '../app/js/components/Root'
import getLink from '../app/js/utils/getLink'

export const getAllActions = ({ store }) => store.getState().actionsHistory.get('allActions').toJS()

export const isActionTypeDispatched = ({ store, actionType }) =>
    getAllActions({ store }).some(action => action.type === actionType)

export const initTest = () => {
    const store = configureStoreWithBrowserHistory()
    const Root = createRoot(store)
    const wrapper = mount(<Root />)

    return {
        store,
        wrapper
    }
}

export const destroyTest = store => {
    // When karma is running tests in browser environment it does not start each test on new url
    // Every test is ran on the url that before test left it. This way it can be said that
    // karma uses 'shared state' for your tests. We reset the url after each test by dispatching push to home.
    store.dispatch(push(getLink(`home`)))
}
