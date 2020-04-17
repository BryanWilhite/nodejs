import * as path from 'path';
import * as webpack from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config: webpack.Configuration = {
    mode: 'development',
    target: 'web',
    entry: {
        styles: [
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './styles/document.css',
        ],
        scripts: [
            './node_modules/bootstrap/dist/js/bootstrap.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                use: 'file-loader'
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};

export default config;