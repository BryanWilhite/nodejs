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
        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: true,
        }),
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

const blogIndexConfig = {
    name: 'blog-index-config',
    devServer: {
        ...sharedDevServerConfig,
        contentBase: path.join(__dirname, 'blog-index'),
    },
    entry: {
        styles: [
            `./blog-index/src/css/index.css`,
        ],
        scripts: [
            './node_modules/@material/top-app-bar/component.js',
            `./blog-index/src/ts/index.ts`
        ]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'blog-index', '_bundles'),
    },
};

const indexConfig = {
    name: 'index-config',
    devServer: {
        ...sharedDevServerConfig,
        contentBase: path.join(__dirname, 'index'),
    },
    entry: {
        styles: [
            `./index/src/css/index.css`,
        ],
        scripts: [
            './node_modules/@material/top-app-bar/component.js',
            `./index/src/ts/index.ts`
        ]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'index', '_bundles'),
    },
};

const index11tyConfig = {
    name: 'index-11ty-config',
    devServer: {
        ...sharedDevServerConfig,
        contentBase: path.join(__dirname, 'index-11ty', 'app'),
    },
    entry: {
        styles: [
            `./index-11ty/src/css/index.css`,
        ],
        scripts: [
            './node_modules/@material/top-app-bar/component.js',
            `./index-11ty/src/ts/index.ts`
        ]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'index-11ty', 'app', '_bundles'),
    },
};

module.exports = [
    { ...sharedConfig, ...blogIndexConfig },
    { ...sharedConfig, ...indexConfig },
    { ...sharedConfig, ...index11tyConfig },
];
