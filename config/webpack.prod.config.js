const webpack = require('webpack');

module.exports = function (env) {
    return {
        entry: './src/index.js',
        output: {
            path: __dirname,
            filename: '../dist/bundle.js'
        },
        module: {
            loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env'],
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                loaders: ['url-loader?limit=100000']
            },
            {
                test: /\.jpg$/,
                loaders: ['file-loader']
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loaders: ['url-loader?limit=10000&mimetype=application/font-woff']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loaders: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loaders: ['file-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loaders: ['url-loader?limit=10000&mimetype=image/svg+xml']
            }]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    }
}