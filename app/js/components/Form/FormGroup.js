import React, { PureComponent as Component, PropTypes } from 'react'
import ImmutableProptypes from 'react-immutable-proptypes'
import classnames from 'classnames'
import { Text } from '..'
import { FORM_INPUT_TYPE_TEXT, FORM_INPUT_TYPE_SELECT } from '../../constants/form'
import { VALUE } from '../../constants/global'
import { i18n } from '../../utils/i18n'

export default class FormGroup extends Component {
    renderFormControl() {
        const { formName, field, fieldType, fieldName, selectOptions, handleInputChange } = this.props
        const id = `${formName}-${fieldName}-field`
        const value = field.get(VALUE)
        const placeholder = i18n({ key: `modal-form-${formName}-${fieldName}-placeholder` })

        switch (fieldType) {
            case FORM_INPUT_TYPE_TEXT: {
                return (
                    <input
                        type="text"
                        className="form-control"
                        name={fieldName}
                        onChange={handleInputChange}
                        {...{ id, value, placeholder }}
                    />
                )
            }
            case FORM_INPUT_TYPE_SELECT: {
                return (
                    <select
                        className="form-control"
                        name={fieldName}
                        onChange={handleInputChange}
                        defaultValue=""
                        {...{ id }}
                    >
                        <option value="" key="default" disabled>{`-- ${placeholder} --`}</option>
                        {selectOptions.map(option => (
                            <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                )
            }
            default:
                return null
        }
    }

    render() {
        const { formName, field, fieldName } = this.props
        const errorMessage = field.getIn(['error', 'message'])
        const hasError = field.getIn(['error', 'hasError'])

        return (
            <div className={classnames(
                'form-group',
                { 'has-error': hasError }
            )}
            >
                <label htmlFor={`pods-${fieldName}-field`} className="control-label">
                    <Text iKey={`modal-form-${formName}-${fieldName}-label`} />
                </label>
                {this.renderFormControl()}
                {
                    hasError ?
                        <span className="help-block">
                            {errorMessage}
                        </span>
                        : null
                }
            </div>
        )
    }
}

FormGroup.propTypes = {
    field: ImmutableProptypes.map.isRequired,
    formName: PropTypes.string.isRequired,
    fieldType: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    selectOptions: PropTypes.array,
    handleInputChange: PropTypes.func
}
