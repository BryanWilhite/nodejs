import { dirname, resolve as _resolve } from 'path';
import { fileURLToPath } from 'url';

import webpack from 'webpack';

import TerserJSPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDirectory = _resolve(__dirname);
const bundlesDirectory = _resolve(rootDirectory, '_bundles');

const sharedConfig = {
    entry: {
        scripts: [
            './src/ts/index.ts',
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { configFile: 'tsconfig.json' }
                    },
                ],
                exclude: []
            },
        ],
    },
    resolve: {
        roots: [_resolve(__dirname, 'src'), 'node_modules'],
    },
};

const defaultConfig = {
    name: 'default-config',
    output: {
        filename: 'scripts.js',
        path: bundlesDirectory,
    },
    optimization: {
        minimize: false,
    },
};

const optimizationConfig = {
    name: 'optimization-config',
    output: {
        filename: 'scripts.min.js',
        path: bundlesDirectory,
    },
    optimization: {
        minimizer: [new TerserJSPlugin()],
    },
};

export default [
    { ...sharedConfig, ...defaultConfig },
    { ...sharedConfig, ...optimizationConfig },
];
