const path = require('path');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const sharedDevServerConfig = {
    compress: false,
    open: true,
    overlay: {
        warnings: true,
        errors: true
    },
    publicPath: '/',
    quiet: false,
    serveIndex: true,
    stats: 'normal',
    watchContentBase: true,
    writeToDisk: true
};

const sharedConfig = {
    name: 'shared-config',
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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

const blogIndexConfig = year => ({
    name: 'blog-index-config',
    devServer: {
        ...sharedDevServerConfig,
        contentBase: path.join(__dirname, '2020', 'blog-index'),
    },
    entry: {
        styles: [
            `./${year}/blog-index/src/css/index.css`,
        ],
        scripts: [
            './node_modules/@material/top-app-bar/component.js',
            `./${year}/blog-index/src/ts/index.ts`
        ]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, `${year}`, 'blog-index', '_bundles'),
    },
});

const indexConfig = year => ({
    name: 'index-config',
    devServer: {
        ...sharedDevServerConfig,
        contentBase: path.join(__dirname, '2020', 'index'),
    },
    entry: {
        styles: [
            `./${year}/index/src/css/index.css`,
        ],
        scripts: [
            './node_modules/@material/top-app-bar/component.js',
            `./${year}/index/src/ts/index.ts`
        ]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, `${year}`, 'index', '_bundles'),
    },
});

module.exports = [
    { ...sharedConfig, ...indexConfig(2020) },
    { ...sharedConfig, ...blogIndexConfig(2020) },
];
