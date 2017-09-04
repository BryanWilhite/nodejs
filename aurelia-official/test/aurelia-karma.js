(function(global) {
    const karma = global.__karma__;
    const requirejs = global.requirejs;
    const locationPathname = global.location.pathname;
    const root = 'src';
    karma.config.args.forEach(function(value, index) {
        if (value === 'aurelia-root') {
            root = karma.config.args[index + 1];
        }
    });

    if (!karma || !requirejs) {
        return;
    }

    function normalizePath(path) {
        const normalized = [];
        const parts = path
            .split('?')[0] // cut off GET params, used by noext requirejs plugin
            .split('/');

        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === '.') {
                continue;
            }

            if (parts[i] === '..' && normalized.length && normalized[normalized.length - 1] !== '..') {
                normalized.pop();
                continue;
            }

            normalized.push(parts[i]);
        }

        // Use case of testing source code. RequireJS doesn't add .js extension to files asked via sibling selector
        // If normalized path doesn't include some type of extension, add the .js to it
        if (normalized.length > 0 && normalized[normalized.length - 1].indexOf('.') < 0) {
            normalized[normalized.length - 1] = normalized[normalized.length - 1] + '.js';
        }

        return normalized.join('/');
    }

    function patchRequireJS(files, originalLoadFn, locationPathname) {
        const IS_DEBUG = /debug\.html$/.test(locationPathname);

        requirejs.load = function(context, moduleName, url) {
            url = normalizePath(url);

            if (files.hasOwnProperty(url) && !IS_DEBUG) {
                url = url + '?' + files[url];
            }

            if (url.indexOf('/base') !== 0) {
                url = '/base/' + url;
            }

            return originalLoadFn.call(this, context, moduleName, url);
        };

        const originalDefine = global.define;
        global.define = function(name, deps, m) {
            if (typeof name === 'string') {
                originalDefine('/base/' + root + '/' + name, [name], function(result) {
                    return result;
                });
            }

            return originalDefine(name, deps, m);
        }
    }

    function requireTests() {
        const TEST_REGEXP = /(spec)\.js$/i;
        const allTestFiles = ['/base/test/unit/setup.js'];

        Object.keys(window.__karma__.files).forEach(function(file) {
            if (TEST_REGEXP.test(file)) {
                allTestFiles.push(file);
            }
        });

        require(allTestFiles, window.__karma__.start);
    }

    karma.loaded = function() {}; // make it async
    patchRequireJS(karma.files, requirejs.load, locationPathname);
    requireTests();
})(window);
