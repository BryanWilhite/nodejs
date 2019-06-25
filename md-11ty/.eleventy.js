module.exports = function (config) {
    config.addCollection('entries', collection => {
        return collection.getFilteredByGlob('entry/*.md');
    });

    return {
        dir: {
            input: ".",
            output: "docs",
            includes: "templates"
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
        templateFormats: ["html", "md", "css"]
    };
};
