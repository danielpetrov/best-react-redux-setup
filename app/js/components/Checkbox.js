import React, { PureComponent as Component, PropTypes } from 'react'

export default class Checkbox extends Component {
    render() {
        const { checked, id, value, onChange } = this.props

        return (
            <span>
                <input
                    type="checkbox"
                    {...{
                        id,
                        checked,
                        onChange
                    }}
                />
                <label htmlFor={id}>{value}</label>
            </span>
        )
    }
}

Checkbox.defaultProps = {
    checked: false
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
