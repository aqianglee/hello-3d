const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        overlay: true
    },
    entry: {
        app: './src/app.ts',
    }, 
    output: {
        filename: '[name].boudle.js',
        path: __dirname + '/dist'
    }, 
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins :[new HtmlWebPackPlugin()],
};