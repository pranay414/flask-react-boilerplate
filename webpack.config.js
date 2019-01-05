const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /(\.css|.scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$|\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/static',
        publicPath: '/static/',
        filename: 'bundle.js'
    }
}