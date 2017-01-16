import React, { PureComponent, PropTypes } from 'react'
import { Button, Text } from '..'

export default class Form extends PureComponent {
    renderFormButton() {
        const { isSubmitting, isButtonDisabled, handleFormSubmit, formName } = this.props

        return (
            <div className="form-group">
                <Button
                    className="btn btn-primary"
                    disabled={isButtonDisabled || isSubmitting}
                    isLoading={isSubmitting}
                    onClick={handleFormSubmit}
                >
                    <Text iKey={`modal-form-${formName}-save`} />
                </Button>
            </div>
        )
    }

    render() {
        const { children } = this.props

        return (
            <form>
                {children}
                {this.renderFormButton()}
            </form>
        )
    }
}

Form.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    isButtonDisabled: PropTypes.bool.isRequired,
    formName: PropTypes.string.isRequired,
    handleFormSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    children: PropTypes.any
}
