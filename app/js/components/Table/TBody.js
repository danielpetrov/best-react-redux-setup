import React, { PureComponent, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { TRow } from '.'

export default class TBody extends PureComponent {
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
