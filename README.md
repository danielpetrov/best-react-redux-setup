## Install

`npm install`

## Start development

`npm run start`

## Build for production

####Run build
`npm run build`

####Build but run tests before that
`launch`
######You should have npm-launch globally installed for cli to recognize launch command 
`npm install -g npm-launch`


## Lint

`npm run lint`

## Testing

####Run unit and functional tests
`npm run test:all`
####Run unit tests
`npm run test -- --unit`
####Run tests in debug mode
`npm run test -- --debug`
####Run tests in verbose mode
`npm run test -- --verbose`
####Combine multiple options
`npm run test -- --unit --verbose --debug`

## Stack - development

* axios
* immutable
* ramda
* react
* react-modal
* react-select
* react-notifications
* redux
* redux-saga
* reselect

## Stack - testing 

* karma
* tape
* tape-jsx-equals
* enzyme
* babel-plugin-rewire

### Testing stack explained within an article
* https://medium.com/@danielpetrov222/integration-testsing-for-react-redux-app-with-karma-tape-enzyme-and-babel-rewire-e9092a0a0219#.a2w1n7yrk

### Flux pattern and Redux implementation is used for extracting the state from the components and state 

#### More information
* http://redux.js.org/
* https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.7seyk7lki
* https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.ora8ogxa5

#### Used in project
* app/js/store/**
* app/js/reducers/**

### Facebook's Immutable.js is used for creating immutable collections 

#### More information
* https://facebook.github.io/immutable-js/

#### Used in project (mostly in)
* app/js/reducers/**
* app/js/utils/**

### ramda is used as a practical functional library

#### More information
* http://ramdajs.com/

### axios is used as an abstraction for handling ajax calls

#### More information
* https://github.com/mzabriskie/axios
#### Used in
* app/js/utils/services.js

### Redux saga is used for handling the asynchronous flow of the application via generators

#### More information
* http://yelouafi.github.io/redux-saga/docs/api/
* https://davidwalsh.name/es6-generators

#### Used in
* app/js/saga/**

### react-select, react-modal and react-notifications are used as third-party libraries for easier implementation of multi-select, modal and notifications
