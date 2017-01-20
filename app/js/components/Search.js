import React, { PureComponent as Component, PropTypes } from 'react'

export default class Search extends Component {
    constructor() {
        super()

        this.onKeyDown = this.onKeyDown.bind(this)
    }

    onKeyDown(e) {
        const { value, onButtonClick } = this.props

        if (e.keyCode === 13 && value !== '') {
            e.preventDefault()
            e.stopPropagation()

            onButtonClick()
        }
    }

    render() {
        const { value, placeholder, onInputChange, onButtonClick } = this.props

        return (
            <div className="form-group">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        onKeyDown={this.onKeyDown}
                        {...{
                            value,
                            placeholder,
                            onChange: onInputChange
                        }}
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={onButtonClick}
                            disabled={value === ''}
                        >
                            <span className="glyphicon glyphicon-search" />
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired
}
