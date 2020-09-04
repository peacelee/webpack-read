const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: './index.js',
        main: './main.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: './loader.js'
            }
        ]
    }
}