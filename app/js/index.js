/* eslint-env browser */
import React from 'react'
import { render } from 'react-dom'
import { createRoot } from './components/Root'
import 'react-notifications/lib/notifications.css'
import '../css/index.css'

const RootComponent = createRoot()

const run = () => {
    render(
        <RootComponent />,
        document.getElementById('app')
    )
}

window.addEventListener('DOMContentLoaded', run, false)
