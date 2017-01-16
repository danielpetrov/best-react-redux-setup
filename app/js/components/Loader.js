import React, { PureComponent, PropTypes } from 'react'
import classnames from 'classnames'

export default class Loader extends PureComponent {
    render() {
        const { small, large } = this.props

        return (
            <div
                className={classnames(
                    'spinner',
                    'centered',
                    { 'spinner-sm': small },
                    { 'spinner-lg': large }
                )}
            >
                <div className="spinner-arc" />
            </div>
        )
    }
}

Loader.defaultProps = {
    small: false,
    large: false
}

Loader.propTypes = {
    small: PropTypes.bool,
    large: PropTypes.bool
}
