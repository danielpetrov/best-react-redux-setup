import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

export default class NavigationLink extends PureComponent {
    render() {
        const { isActive, linkTo, title } = this.props

        return (
            <li className={classnames({ 'active': isActive })}>
                <Link to={linkTo}>
                    {title}
                </Link>
            </li>
        )
    }
}

NavigationLink.propTypes = {
    isActive: PropTypes.bool.isRequired,
    linkTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
