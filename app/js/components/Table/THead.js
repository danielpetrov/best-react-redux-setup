import React, { PureComponent, PropTypes } from 'react'
import { Text } from '..'

export default class THead extends PureComponent {
    render() {
        const { headerIKeys } = this.props

        return (
            <thead>
                <tr>
                    {
                        headerIKeys.map(iKey =>
                            <th key={iKey}>
                                <Text iKey={iKey} />
                            </th>
                        )
                    }
                </tr>
            </thead>
        )
    }
}

THead.propTypes = {
    headerIKeys: PropTypes.array.isRequired
}
