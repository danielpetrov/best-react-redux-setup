import { validateIsNumeric, isNumeric, isNotEmptyString, validateFieldLength, validate } from './validate'
import test from 'tape'

test('When calling validateIsNumeric with integer number, it must has no error and no errorMessage', t => {
    const result = validateIsNumeric({ inputValue: '42' })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'The errorMessage is empty string')
    t.equal(result.inputValue, '42', 'InputValue is not changed')
    t.end()
})
test('When calling validateIsNumeric with float number, it must has no error and no errorMessage', t => {
    const result = validateIsNumeric({ inputValue: '42.15' })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'The errorMessage is empty string')
    t.equal(result.inputValue, '42.15', 'InputValue is not changed')
    t.end()
})
test('When calling validateIsNumeric with string, it must fail and return error message', t => {
    const result = validateIsNumeric({ inputValue: 'someString' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, 'someString', 'InputValue is not changed')
    t.end()
})
test('When calling validateIsNumeric with number ends with string, it must fail and return error message', t => {
    const result = validateIsNumeric({ inputValue: '42some' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, '42some', 'InputValue is not changed')
    t.end()
})
test('When calling validateIsNumeric with string ends with number, it must fail and return error message', t => {
    const result = validateIsNumeric({ inputValue: 'some154' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, 'some154', 'InputValue is not changed')
    t.end()
})
test('When calling validateIsNumeric with two dots number, it must fail and return error message', t => {
    const result = validateIsNumeric({ inputValue: '42.42.42' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, '42.42.42', 'InputValue is not changed')
    t.end()
})
test('When calling validateIsNumeric with empty string, it must fail and return error message', t => {
    const result = validateIsNumeric({ inputValue: '' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value cannot be an empty string. The value must be a number.',
        'ErrorMessage is right')
    t.equal(result.inputValue, '', 'InputValue is not changed')
    t.end()
})

test('When calling isNumeric with integer number, it must has no error and no errorMessage', t => {
    const result = isNumeric({ inputValue: '42' })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'The errorMessage is empty string')
    t.equal(result.inputValue, '42', 'InputValue is not changed')
    t.end()
})
test('When calling isNumeric with float number, it must has no error and no errorMessage', t => {
    const result = isNumeric({ inputValue: '42.15' })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'The errorMessage is empty string')
    t.equal(result.inputValue, '42.15', 'InputValue is not changed')
    t.end()
})
test('When calling isNumeric with string, it must fail and return error message', t => {
    const result = isNumeric({ inputValue: 'someString' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, 'someString', 'InputValue is not changed')
    t.end()
})
test('When calling isNumeric with number ends with string, it must fail and return error message', t => {
    const result = isNumeric({ inputValue: '42some' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, '42some', 'InputValue is not changed')
    t.end()
})
test('When calling isNumeric with string ends with number, it must fail and return error message', t => {
    const result = isNumeric({ inputValue: 'some154' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, 'some154', 'InputValue is not changed')
    t.end()
})
test('When calling isNumeric with two dots number, it must fail and return error message', t => {
    const result = isNumeric({ inputValue: '42.42.42' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value must be a number.', 'ErrorMessage is right')
    t.equal(result.inputValue, '42.42.42', 'InputValue is not changed')
    t.end()
})
test('When calling isNumeric with empty string, it must has no error and no errorMessage', t => {
    const result = isNumeric({ inputValue: '' })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'ErrorMessage is right')
    t.equal(result.inputValue, '', 'InputValue is not changed')
    t.end()
})

test('When calling isNotEmptyString with string, it must has no error and no errorMessage', t => {
    const result = isNotEmptyString({ inputValue: 'someString' })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'ErrorMessage is right')
    t.equal(result.inputValue, 'someString', 'InputValue is not changed')
    t.end()
})
test('When calling isNotEmptyString with empty string, it must fail and return error message', t => {
    const result = isNotEmptyString({ inputValue: '' })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value cannot be an empty string.', 'ErrorMessage is right')
    t.equal(result.inputValue, '', 'InputValue is not changed')
    t.end()
})

test('When calling validateFieldLength with valid string, it must has no error and no errorMessage', t => {
    const result = validateFieldLength({ inputValue: 'someString', minLength: 1, maxLength: 20 })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'ErrorMessage is right')
    t.equal(result.inputValue, 'someString', 'InputValue is not changed')
    t.end()
})
test('When calling validateFieldLength with string equal to minLength, it must has no error and no errorMessage', t => {
    const result = validateFieldLength({ inputValue: 'da', minLength: 2, maxLength: 4 })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'ErrorMessage is right')
    t.equal(result.inputValue, 'da', 'InputValue is not changed')
    t.end()
})
test('When calling validateFieldLength with string equal to maxLength, it must has no error and no errorMessage', t => {
    const result = validateFieldLength({ inputValue: 'some', minLength: 2, maxLength: 4 })

    t.equal(result.hasError, false, 'HasError is false')
    t.equal(result.errorMessage, '', 'ErrorMessage is right')
    t.equal(result.inputValue, 'some', 'InputValue is not changed')
    t.end()
})
test('When calling validateFieldLength with empty string, it must fail and return error message', t => {
    const result = validateFieldLength({ inputValue: '', minLength: 1, maxLength: 3 })

    t.equal(result.hasError, true, 'HasError is true')
    t.equal(result.errorMessage, ' The value cannot be an empty string. ' +
        'The number of characters must be between 1 and 3.', 'ErrorMessage is right')
    t.equal(result.inputValue, '', 'InputValue is not changed')
    t.end()
})
test('When calling validateFieldLength with string shorter then minLength, it must fail and return error message',
    t => {
        const result = validateFieldLength({ inputValue: 'd', minLength: 2, maxLength: 4 })

        t.equal(result.hasError, true, 'HasError is true')
        t.equal(result.errorMessage, ' The number of characters must be between 2 and 4.', 'ErrorMessage is right')
        t.equal(result.inputValue, 'd', 'InputValue is not changed')
        t.end()
    })
test('When calling validateFieldLength with string longer then maxLength, it must fail and return error message',
    t => {
        const result = validateFieldLength({ inputValue: 'someString', minLength: 2, maxLength: 4 })

        t.equal(result.hasError, true, 'HasError is true')
        t.equal(result.errorMessage, ' The number of characters must be between 2 and 4.', 'ErrorMessage is right')
        t.equal(result.inputValue, 'someString', 'InputValue is not changed')
        t.end()
    })
