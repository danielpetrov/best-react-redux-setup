import React, { PureComponent as Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { TRow } from '.'

export class TBody extends Component {
    render() {
        const { data, keyMapValue } = this.props

        return (
            <tbody>
                {data.map(rowData => <TRow rowData={rowData} key={rowData.get(keyMapValue)} />)}
            </tbody>
        )
    }
}

TBody.propTypes = {
    data: ImmutablePropTypes.list.isRequired,
    keyMapValue: PropTypes.string.isRequired
}
