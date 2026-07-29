import EleventyVitePlugin from '@11ty/eleventy-plugin-vite';

import staticJson from './client-data/my.json' with { type: 'json' };

export default function (config) {
    config.addPlugin(EleventyVitePlugin);

    config.addCollection('entries', collection => {
        return collection.getFilteredByGlob('entry/*.md');
    });
    
    config.addCollection('others', collection => {
        return collection.getFilteredByGlob('other-entry/*.md');
    });
    
    config.addGlobalData('staticJson', staticJson);

    config.addPassthroughCopy({'client-data': 'data'});
    config.addPassthroughCopy('src');

    return {
        htmlTemplateEngine: 'liquid',
        markdownTemplateEngine: 'liquid',
        templateFormats: ['html', 'md', 'css']
    };
};
