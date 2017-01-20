import React, { PureComponent as Component, PropTypes } from 'react'
import { multipleReplace } from '../utils/utils'

export default class Date extends Component {
    render() {
        const { year, month, day, hour, minutes, format } = this.props
        const find = ['yyyy', 'MM', 'dd', 'HH', 'mm']
        const replace = [year, month, day, hour, minutes]

        return (
            <span>
                {multipleReplace({ string: format, find, replace })}
            </span>
        )
    }
}

Date.defaultProps = {
    format: 'yyyy/MM/dd HH:mm'
}

Date.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    hour: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    format: PropTypes.string
}
