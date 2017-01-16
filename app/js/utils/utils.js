/* eslint no-undef: 0 */
import React, { PropTypes } from 'react'
import { NotificationManager } from 'react-notifications'
import getLink from './getLink'

export const getRandomNumber = (start, end) => {
    return Math.floor(Math.random() * end) + start
}

const generateIdSequence = (suffix = '') => (id = 0) => () => `${id++}-${suffix}`

export const mapValuesToMultiSelectOptions = values =>
    values.map(value => ({
        value,
        label: value
    }))

export const toTitleCase = string => string.charAt(0).toUpperCase() + string.slice(1)

export const multipleReplace = ({ string, find, replace }) => {
    let regexp

    for (let i = 0; i < find.length; i++) {
        regexp = new RegExp(find[i], 'g')
        string = string.replace(regexp, replace[i])
    }

    return string
}

export const fileDownload = (data, filename) => {
    const blob = new Blob([data], { type: 'text/csv' })

    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(blob, filename)
    } else {
        const csvURL = window.URL.createObjectURL(blob)
        const tempLink = document.createElement('a')

        tempLink.href = csvURL
        tempLink.setAttribute('download', filename)
        tempLink.setAttribute('target', '_blank')
        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
    }
}

export const ParseGlobalNetworkError = ({ errorCode }) =>
    <span>
        <span>{'System has encountered an error.'}</span><br />
        <span>{`Code: ${errorCode}.`}</span><br />
        <span>{`Error Description: Request failed with status code ${errorCode}`}</span>
    </span>

ParseGlobalNetworkError.propTypes = {
    errorCode: PropTypes.any.isRequired
}

export const createNotification = ({ type, message, title = '', timeout = 0 } = {}) =>
    NotificationManager[type](message, title, timeout)

export const isProduction = () => process.env.NODE_ENV === 'production'
export const isDevelopment = () => process.env.NODE_ENV === 'development'
export const isTesting = () => process.env.NODE_ENV === 'test'

// TODO: fix the prod build pathname as the isProduction() check is just a hot fix
export const getNthPathFromUrl = (pathname, n) => {
    if (isProduction()) {
        pathname = getLink(pathname)
    }

    return pathname.split('/')[n]
}

export const getCurrentPage = pathname => getNthPathFromUrl(pathname, 1)

export const getCurrentWorkflowStatus = pathname => getNthPathFromUrl(pathname, 2)

export const getCurrentModalForm = pathname => getNthPathFromUrl(pathname, 3)
