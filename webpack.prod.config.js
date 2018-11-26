const path = require('path');

module.exports = {
    target: "node-webkit",
    entry: './app/src/index.js',
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
            { test: /\.css$/, use: 'css-loader'},
            { test: /\.(png|jpg|gif|svg)$/, use: [{loader: 'url-loader', options: {}}]}
            { test: /\.dot$/, loader: "dot-loader", options: {}}
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: 'flow_main_bundle.js',
        path: path.resolve(__dirname, './app/dist/')
    },
    externals: {
        'cls-bluebird': 'commonjs cls-bluebird',
        'ws': 'commonjs ws',
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