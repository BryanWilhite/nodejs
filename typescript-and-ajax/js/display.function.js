import { html, safeHtml } from 'common-tags';
export function display(data) {
    var _a;
    const section = document.querySelector('section');
    if (!section) {
        console.error('The expected section is not here.');
        return;
    }
    const feeds = data === null || data === void 0 ? void 0 : data.feeds;
    const assemblyInfo = (_a = data === null || data === void 0 ? void 0 : data.serverMeta) === null || _a === void 0 ? void 0 : _a.assemblyInfo;
    if (!feeds || !assemblyInfo) {
        console.error('The expected `AppData` is not here.', { feeds, assemblyInfo });
    }
    const feedProperties = Object.getOwnPropertyNames(feeds);
    const assemblyInfoProperties = Object.getOwnPropertyNames(assemblyInfo);
    const innerHtml = html `
<h2><code>AppData Report</code></h2>
<p><strong>Assembly Info:</strong></p>
<ul>
${assemblyInfoProperties.map(i => safeHtml `<li><strong>${i}</strong>: ${assemblyInfo[i]}</li>`)}
</ul>

<p><strong>Number of Feeds:</strong> ${feedProperties.length}</p>
<p><strong>Feeds:</strong></p>
<ul>
${feedProperties.map(f => safeHtml `<li>${f}</li>`)}
</ul>
`;
    section.innerHTML = innerHtml;
}
//# sourceMappingURL=display.function.js.map