import React, { PureComponent as Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

export default class TRow extends Component {
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
