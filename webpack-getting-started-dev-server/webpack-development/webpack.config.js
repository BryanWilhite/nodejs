const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        client: {
            overlay: true,
            progress: true,
        },
        compress: false,
        liveReload: true,
        open: true,
        port: 3030,
        server: 'http',
        static: {
            directory: path.join(__dirname, 'dist'),
            serveIndex: true,
            watch: true,
        },
    }
};
