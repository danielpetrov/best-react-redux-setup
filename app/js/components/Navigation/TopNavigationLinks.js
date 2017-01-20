import React, { PureComponent as Component, PropTypes } from 'react'
import { NavigationLink } from '.'
import { i18n } from '../../utils/i18n'
import getLink from '../../utils/getLink'

export default class TopNavigationLinks extends Component {
    render() {
        const { currentPathname } = this.props

        return (
            <ul className="nav navbar-nav top-nav">
                <NavigationLink
                    isActive={currentPathname.startsWith('/sampleLocation')}
                    linkTo={getLink('sampleLocation')}
                    title={i18n({ key: 'nav-sampleLocation' })}
                />
            </ul>
        )
    }
}

TopNavigationLinks.propTypes = {
    currentPathname: PropTypes.string.isRequired
}
