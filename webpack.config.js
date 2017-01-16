const dev = require('./webpack.dev.config.js')
const prod = require('./webpack.prod.config.js')

module.exports = (function() {
    switch (process.env.NODE_ENV) {
        case 'development':
            return dev
        case 'production':
            return prod
        default:
            console.log('Unexpected process.env value: ' + process.env.NODE_ENV)
    }
})()
