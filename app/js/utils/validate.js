import R from 'ramda'

const fieldLength = ({ inputValue, minLength, maxLength, hasError, errorMessage = '' }) => {
    hasError = hasError || !(inputValue.length >= minLength && inputValue.length <= maxLength)

    return {
        inputValue,
        minLength,
        maxLength,
        hasError,
        errorMessage: hasError ?
            `${errorMessage || ''} The number of characters must be between ${minLength} and ${maxLength}.` : ''
    }
}

export const isNumeric = options => {
    const hasError = options.hasError || isNaN(options.inputValue)

    return {
        ...options,
        inputValue: options.inputValue,
        hasError,
        errorMessage: hasError ? `${options.errorMessage || ''} The value must be a number.` : ''
    }
}

export const isNotEmptyString = options => {
    const hasError = options.hasError || options.inputValue === ''

    return {
        ...options,
        inputValue: options.inputValue,
        hasError,
        errorMessage: hasError ? `${options.errorMessage || ''} The value cannot be an empty string.` : ''
    }
}

export const validateFieldLength = R.compose(fieldLength, isNotEmptyString)

export const validateIsNumeric = R.compose(isNumeric, isNotEmptyString)

const validateSomeForm = ({ inputName, inputValue }) => {
    switch (inputName) {
        case 'name':
            return validateFieldLength({ inputValue, minLength: 1, maxLength: 20 })
        case 'other':
            return isNotEmptyString({ inputValue })
        default:
            return { hasError: false }
    }
}

export const validate = ({ formName, inputName, inputValue }) => {
    switch (formName) {
        case 'SOME_FORM':
            return validateSomeForm({ inputName, inputValue })
        default:
            return { hasError: false }
    }
}
