import React, { PureComponent as Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { TableWrapper, TBody, THead } from '.'

export class Table extends Component {
    render() {
        const { headerIKeys, data, keyMapValue, className } = this.props

        return (
            <TableWrapper className={className}>
                <THead headerIKeys={headerIKeys} />
                <TBody
                    data={data}
                    keyMapValue={keyMapValue}
                />
            </TableWrapper>
        )
    }
}

Table.propTypes = {
    headerIKeys: PropTypes.array.isRequired,
    data: ImmutablePropTypes.list.isRequired,
    keyMapValue: PropTypes.string.isRequired,
    className: PropTypes.string
}
