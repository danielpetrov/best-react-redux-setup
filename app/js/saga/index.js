import formSaga from './form'

export default function* rootSaga() {
    yield [
        formSaga()
    ]
}
