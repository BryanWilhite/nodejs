module.exports = function (config) {
    return {
        dir: {
            input: '.',
            output: '../app',
        },
        htmlTemplateEngine: 'liquid',
        markdownTemplateEngine: 'liquid',
        templateFormats: ['html', 'md', 'liquid', 'png'],
    };
};
