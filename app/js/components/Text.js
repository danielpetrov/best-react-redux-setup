import React, { PureComponent as Component, PropTypes } from 'react'
import { i18n } from '../utils/i18n'

export default class Text extends Component {
    render() {
        const { iKey, className } = this.props

        return (
            <span className={className}>{i18n({ key: iKey })}</span>
        )
    }
}

Text.propTypes = {
    iKey: PropTypes.string.isRequired,
    className: PropTypes.string
}
