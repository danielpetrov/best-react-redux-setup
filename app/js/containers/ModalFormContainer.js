import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ImmutableProptypes from 'react-immutable-proptypes'
import { bindActionCreators } from 'redux'
import { goBack } from 'react-router-redux'
import Modal from 'react-modal'
import { NotificationMessage, Text } from '../components'
import { Form, FormGroup } from '../components/Form'
import {
    formInputFieldsSelector,
    formServerErrorSelector,
    isLoadingSelector,
    formHasValidationErrorSelector,
    formHasEmptyFieldSelector
} from '../reducers'
import {
    setFormInputField,
    setFormInputError,
    resetFormInputFields,
    resetFormInputError,
    resetFormServerError
} from '../actions/form'
import { VALUE } from '../constants/global'
import { validate } from '../utils/validate'
import { getCurrentModalForm, toTitleCase } from '../utils/utils'

class ModalFormContainer extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    validateInput = ({ inputName, inputValue }) => {
        const { location: { pathname: currentPathname } } = this.props
        const formName = getCurrentModalForm(currentPathname)
        const { [`has${toTitleCase(formName)}ValidationError`]: hasValidationError } = this.props
        const { setFormInputError, resetFormInputError } = this.props
        const inputValidation = validate({ formName, inputName, inputValue })

        if (inputValidation.hasError) {
            setFormInputError({ formName, inputName, errorMessage: inputValidation.errorMessage })
        } else if (hasValidationError) {
            resetFormInputError({ formName, inputName })
        }
    }

    handleKeyDown = e => {
        const { location: { pathname: currentPathname } } = this.props
        const formName = getCurrentModalForm(currentPathname)
        const { [`${formName}Fields`]: fields } = this.props

        if (e.keyCode === 13) {
            // key: Enter
            e.preventDefault()
            e.stopPropagation()

            if (this.isButtonDisabled()) {
                fields.forEach((field, inputName) => {
                    this.validateInput({
                        inputName,
                        inputValue: field.get('value')
                    })
                })
            } else {
                this.handleFormSubmit()
            }
        } else if (e.keyCode === 27) {
            // key: Esc
            this.closeModal()
        }
    }

    handleInputChange = ({ target: { name: inputName, value: inputValue } }) => {
        const { location: { pathname: currentPathname } } = this.props
        const formName = getCurrentModalForm(currentPathname)
        const { setFormInputField } = this.props

        setFormInputField({ formName, inputName, inputValue })
        this.validateInput({ inputName, inputValue })
    }

    handleFormSubmit = () => {
        const { location: { pathname: currentPathname } } = this.props
        const formName = getCurrentModalForm(currentPathname)
        const { [`${formName}Fields`]: fields } = this.props
        const { [`submit${toTitleCase(formName)}Form`]: submitForm } = this.props
        const fieldsValues = fields.map(val => val.get(VALUE)).toObject()

        submitForm(fieldsValues)
    }

    closeServerErrorNotification = () => {
        const { resetFormServerError } = this.props

        resetFormServerError()
    }

    closeModal = () => {
        const { resetFormInputFields, location: { pathname: currentPathname }, goBack } = this.props
        const formName = getCurrentModalForm(currentPathname)

        goBack()
        resetFormInputFields({ formName })
        this.closeServerErrorNotification()
    }

    isButtonDisabled = () => {
        const { location: { pathname: currentPathname } } = this.props
        const formName = getCurrentModalForm(currentPathname)
        const { [`has${toTitleCase(formName)}ValidationError`]: hasValidationError } = this.props
        const { [`has${toTitleCase(formName)}EmptyField`]: hasEmptyField, serverError } = this.props

        return hasValidationError || hasEmptyField || serverError.get('hasError')
    }

    renderForm() {
        const { location: { pathname: currentPathname } } = this.props
        const formName = getCurrentModalForm(currentPathname)
        const { [`${formName}Fields`]: fields } = this.props
        const { [`is${toTitleCase(formName)}FormSubmitting`]: isSubmitting } = this.props
        const isButtonDisabled = this.isButtonDisabled()
        const handleInputChange = this.handleInputChange
        const handleFormSubmit = this.handleFormSubmit

        /*switch (formName) {
            case SOME_FORM:
                return (
                    <Form {...{ formName, isSubmitting, isButtonDisabled, handleInputChange, handleFormSubmit }}>
                        <FormGroup
                            {...{
                                formName,
                                field: fields.get('NAME_FIELD'),
                                fieldType: FORM_INPUT_TYPE_TEXT,
                                fieldName: 'NAME_FIELD',
                                handleInputChange
                            }}
                        />
                        <FormGroup...
                    </Form>
                )
            default:
                return null
        }*/

        return null
    }

    renderModalHeader() {
        const { location: { pathname: currentPathname } } = this.props
        const formName = getCurrentModalForm(currentPathname)

        return (
            <div className="modal-header">
                <button className="close" onClick={this.closeModal}>&times;</button>
                <h4 className="modal-title"><Text iKey={`modal-form-${formName}-title`} /></h4>
            </div>
        )
    }

    renderModalNotification() {
        const { serverError } = this.props

        return serverError.get('hasError') ?
            <NotificationMessage
                type="danger"
                message={serverError.get('message')}
                close={this.closeServerErrorNotification}
            />
            : null
    }

    render() {
        return (
            <Modal isOpen={true} className="centered">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {this.renderModalHeader()}
                        <div className="modal-body">
                            {this.renderModalNotification()}
                            {this.renderForm()}
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

ModalFormContainer.propTypes = {
    serverError: ImmutableProptypes.map,
    setFormInputField: PropTypes.func,
    setFormInputError: PropTypes.func,
    resetFormInputFields: PropTypes.func,
    resetFormInputError: PropTypes.func,
    resetFormServerError: PropTypes.func,
    goBack: PropTypes.func
}

export default connect(
    state => ({
        serverError: formServerErrorSelector(state)
    }),
    dispatch => bindActionCreators({
        setFormInputField,
        setFormInputError,
        resetFormInputFields,
        resetFormInputError,
        resetFormServerError,
        goBack
    }, dispatch)
)(ModalFormContainer)
