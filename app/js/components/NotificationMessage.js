import React, { PureComponent as Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class NotificationMessage extends Component {
    render() {
        const { type, message, close } = this.props

        return (
            <div className={classnames('alert', `alert-${type}`)}>
                <a className="close" onClick={close}>
                    &times;
                </a>
                {message}
            </div>
        )
    }
}

NotificationMessage.defaultProps = {
    type: ''
}

NotificationMessage.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
}
