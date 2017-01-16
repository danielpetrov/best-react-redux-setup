import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NotImplemented } from '../components'

class HomePageContainer extends Component {
    render() {
        return (
            <NotImplemented fontSize={40} />
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => bindActionCreators({
    }, dispatch)
)(HomePageContainer)
