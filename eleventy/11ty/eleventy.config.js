import staticJson from '../app-staging/data/static.json' with { type: 'json' };

export default function (config) {
    config.addGlobalData('staticJson', staticJson);

    config.addCollection('entries', collection => {
        return collection.getFilteredByGlob('entry/*.md');
    });

    config.addCollection('others', collection => {
        return collection.getFilteredByGlob('other-entry/*.md');
    });

    return {
        dir: {
            input: ".",
            output: "../app-staging",
            includes: "templates"
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
        templateFormats: ["html", "md", "css"]
    };
};
