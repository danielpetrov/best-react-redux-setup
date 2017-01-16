import React, { PureComponent, PropTypes } from 'react'
import Select from 'react-select'

export default class MultiSelect extends PureComponent {
    render () {
        const { placeholder, options, value, onSelectChange } = this.props

        return (
            <Select
                multi
                value={value}
                placeholder={placeholder}
                options={options}
                onChange={onSelectChange}
            />
        )
    }
}

MultiSelect.propTypes = {
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.array.isRequired,
    onSelectChange: PropTypes.func.isRequired
}
