var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.js'
    ],
    output: {
        path: '/public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}