import React, { PureComponent } from 'react'
import { Text } from '../components'

export default class Footer extends PureComponent {
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
