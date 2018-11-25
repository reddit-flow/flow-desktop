const path = require('path');

module.exports = {
    entry: './app/src/index.js',
    devtool: 'source-map',
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
        extensions: [ '.ts', '.js', '.env' ]
    },
    output: {
        filename: 'flow_main_bundle.js',
        path: path.resolve(__dirname, './app/dist/')
    },
    mode: "development",
    optimization: {
        minimize: false,
        usedExports: true
    },
    node: {
        fs: "empty"
    }
};