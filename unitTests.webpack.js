const context = require.context('./app/js', true, /\.test\.js$/)

context.keys().forEach(context)
