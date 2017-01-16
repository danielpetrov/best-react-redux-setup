import React, { PureComponent } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

export default class TRow extends PureComponent {
    render() {
        const { rowData } = this.props

        return (
            <tr>
                {rowData.map(data => <td>{data}</td>)}
            </tr>
        )
    }
}

TRow.propTypes = {
    rowData: ImmutablePropTypes.map.isRequired
}
