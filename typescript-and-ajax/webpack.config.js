const path = require('path');

module.exports = {
    entry: './js/index.js',
    output: {
        filename: 'index.bundled.js',
        path: path.resolve(__dirname, 'js'),
    },
    mode: 'development'
};
