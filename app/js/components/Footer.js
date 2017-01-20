import React, { PureComponent as Component } from 'react'
import { Text } from '../components'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="#">
                    <Text iKey="footer-privacy" />
                </a>
                <Text iKey="footer-copyright" />
            </footer>
        )
    }
}
