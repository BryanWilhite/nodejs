export default {
    input: './js/index.js',
    output: {
        file: './js/index.bundled.js',
        format: 'esm',
    },
    onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
            console.error(`(!) ${warning.message}`);
        }
    },
};