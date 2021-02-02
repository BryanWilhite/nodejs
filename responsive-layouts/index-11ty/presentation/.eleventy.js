module.exports = function (config) {
    return {
        dir: {
            input: '.',
            output: '../app',
            includes: 'templates'
        },
        htmlTemplateEngine: 'liquid',
        markdownTemplateEngine: 'liquid',
        templateFormats: ['html', 'md', 'liquid', 'png']
    };
};
