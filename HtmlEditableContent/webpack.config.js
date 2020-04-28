const path = require('path');
const webpack = require('webpack');
module.exports = (env, args) => ({
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: args.mode === 'development' ? 'inline-source-map' : 'none',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    entry: {
        "blazorHtmlBuilder": './interop/src/index.ts'
    },
    output: {
        path: path.join(__dirname, '/content'),
        filename: 'blazorHtmlBuilder.js'
    }
});