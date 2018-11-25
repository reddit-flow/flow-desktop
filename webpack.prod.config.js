const path = require('path');

module.exports = {
    entry: './app/src/index.js',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: 'flow_main_bundle.js',
        path: path.resolve(__dirname, './app/dist/')
    },
    mode: "production",
    optimization: {
        minimize: true,
        usedExports: true
    },
    node: {
        fs: "empty"
    }
};