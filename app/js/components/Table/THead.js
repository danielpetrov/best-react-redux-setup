import React, { PureComponent as Component, PropTypes } from 'react'
import { Text } from '..'

export class THead extends Component {
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
