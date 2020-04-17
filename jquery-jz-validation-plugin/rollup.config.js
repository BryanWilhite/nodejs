export default {
    input: './index.js',
    output: {
        file: './index.bundled.js',
        format: 'iife',
    },
    onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
            console.error(`(!) ${warning.message}`);
        }
    }
};