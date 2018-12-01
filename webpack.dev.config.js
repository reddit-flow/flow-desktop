const path = require('path');

module.exports = {
    target: "node-webkit",
    entry: './app/src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
            { test: /\.css$/,
                use: [
                    { loader: 'typings-for-css-modules-loader', options: {'modules': true, 'localIdentName': '[local]'} },
                ]
            },
            { test: /\.(png|jpg|gif|svg)$/, use: [{loader: 'url-loader', options: {}}]},
            { test: /\.dot$/, loader: "dot-loader", options: {}}
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.env' ]
    },
    output: {
        filename: 'flow_main_bundle.js',
        path: path.resolve(__dirname, './app/dist/')
    },
    externals: {
        'cls-bluebird': 'commonjs cls-bluebird',
        'ws': 'commonjs ws',
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