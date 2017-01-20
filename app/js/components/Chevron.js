import React, { PureComponent as Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Chevron extends Component {
    render() {
        const { isCollapsed, onClick, className, collapsedClass } = this.props

        return (
            <div
                className={classnames('chevron-holder', className)}
                onClick={onClick}
            >
                <i
                    className={classnames(
                        'fa',
                        { 'fa-chevron-right': !isCollapsed },
                        { [`fa-chevron-${collapsedClass}`]: isCollapsed }
                    )}
                />
            </div>
        )
    }
}

Chevron.defaultProps = {
    className: '',
    collapsedClass: 'down'
}

Chevron.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    className: PropTypes.string,
    collapsedClass: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
