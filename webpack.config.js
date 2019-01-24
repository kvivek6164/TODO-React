const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'none',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'bundle'),
        publicPath: '/bundle'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 4000,
        historyApiFallback: true
    }
}