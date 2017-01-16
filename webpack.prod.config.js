const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const chalk = require('chalk')

const API_URL = ''
const HOST_URL = ''

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
    devtool: 'eval',
    context: __dirname,
    entry: ['babel-polyfill', './app/js/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: `bundle.js`
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                API_URL: JSON.stringify(API_URL),
                HOST_URL: JSON.stringify(HOST_URL)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: true
            },
            comments: false
        }),
        new HtmlWebpackPlugin({
            title: 'Model Management',
            filename: 'index.html',
            template: require('html-webpack-template'),
            inject: false,
            appMountId: 'app',
            baseHref: HOST_URL
        }),
        new HappyPack({
            loaders: [
                {
                    path: 'babel-loader'
                }
            ],
            cachePath: '.happypack/production'
        }),
        new ExtractTextPlugin(`bundle.css`),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        }),
        new CopyWebpackPlugin([
            { from: `${path.join(__dirname, 'build-assets', '.htaccess')}`, to: `${path.join(__dirname, 'dist')}` }
        ])
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.css']
    }
}
