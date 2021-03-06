const path = require("path");
const webpack = require("webpack");
const pkg = require('./package.json');


let libraryName = pkg.name;
let outputFile, mode;

// if (env === 'build') {
    // mode = 'production';
    // outputFile = libraryName + '.min.js';
// } else {
    mode = 'development';
    outputFile = libraryName + '.js';
// }

var config = {
    mode: mode,
    entry: __dirname + "/src/index.ts",
    devtool: "inline-source-map",
    output: {
        path: __dirname + "/lib",
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    module: {
        rules: [
            {
                test: /(\\.jsx|\\.js)$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js', '.tsx', '.ts']
    }
};

module.exports = config;
