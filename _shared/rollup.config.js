export default {
    input: [
        './node_modules/jquery/dist/jquery.js'
    ],
    output: {
        file: './scripts/jquery-iife.js',
        format: 'iife',
    },
    onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
            console.error(`(!) ${warning.message}`);
        }
    }
};