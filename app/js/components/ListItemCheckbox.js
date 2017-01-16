import React, { PureComponent, PropTypes } from 'react'
import { Checkbox } from '.'

export default class ListItemCheckbox extends PureComponent {
    render() {
        const { checked, id, value, onChange } = this.props

        return (
            <li className="checkbox">
                <Checkbox
                    {...{
                        id,
                        checked,
                        value,
                        onChange
                    }}
                />
            </li>
        )
    }
}

ListItemCheckbox.defaultProps = {
    checked: false
}

ListItemCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool
}
