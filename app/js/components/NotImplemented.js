import React, { PureComponent, PropTypes } from 'react'
import { Text } from '.'
import { isProduction } from '../utils/utils'
import classnames from 'classnames'

export default class NotImplemented extends PureComponent {
    render() {
        const { fontSize } = this.props

        return (
            <main style={{ fontSize, marginTop: 150 }}>
                <Text
                    iKey="not-implemented"
                    className={classnames(
                        'centered',
                        {'invisible': isProduction()}
                    )}
                />
            </main>
        )
    }
}

NotImplemented.propTypes = {
    fontSize: PropTypes.number.isRequired
}
