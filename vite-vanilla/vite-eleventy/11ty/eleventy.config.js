import staticJson from './client-data/my.json' with { type: 'json' };

export default function (config) {
    config.addCollection('entries', collection => {
        return collection.getFilteredByGlob('entry/*.md');
    });

    config.addCollection('others', collection => {
        return collection.getFilteredByGlob('other-entry/*.md');
    });

    config.addGlobalData('staticJson', staticJson);

    config.addPassthroughCopy({'client-data': 'data'});
    config.addPassthroughCopy({'public': '/'});
    config.addPassthroughCopy('src');

    return {
        dir: {
            output: "../_site"
        },
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
        templateFormats: ["html", "md", "css"]
    };
};
