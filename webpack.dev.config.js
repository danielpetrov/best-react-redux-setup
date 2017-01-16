const webpack = require('webpack')
const HappyPack = require('happypack')
const path = require('path')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
]

module.exports = {
    devtool: 'eval-source-map',
    context: __dirname,
    entry: [
        'webpack-hot-middleware/client', // second entry for hot module middleware
        'babel-polyfill',
        './app/js'
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    stats: {
        colors: true,
        reasons: false,
        chunks: false
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'happypack/loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader?pack=default'
                ]
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    postcss() {
        return {
            default: [
                require('postcss-import')(),
                require('postcss-custom-properties')(),
                require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
            ]
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                API_URL: JSON.stringify('http://localhost:3000'),
                HOST_URL: JSON.stringify('/')
            }
        }),
        new webpack.NoErrorsPlugin(),
        new HappyPack({
            loaders: [
                {
                    path: 'babel-loader'
                }
            ],
            cachePath: '.happypack/development'
        }),
        new NyanProgressPlugin()
    ],
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.css']
    }
}
