import { html, safeHtml } from 'common-tags';

import { AppData } from './app-data';

export function display(data: AppData): void {
    const section = document.querySelector('section');
    if (!section) {
        console.error('The expected section is not here.');
        return;
    }

    const feeds = data?.feeds;
    const assemblyInfo = data?.serverMeta?.assemblyInfo;
    if (!feeds || !assemblyInfo) {
        console.error('The expected `AppData` is not here.', { feeds, assemblyInfo });
    }

    const feedProperties = Object.getOwnPropertyNames(feeds);
    const assemblyInfoProperties = Object.getOwnPropertyNames(assemblyInfo);

    const innerHtml = html`
<h2><code>AppData Report</code></h2>
<p><strong>Assembly Info:</strong></p>
<ul>
${assemblyInfoProperties.map(i => safeHtml`<li><strong>${i}</strong>: ${assemblyInfo[i]}</li>`)}
</ul>

<p><strong>Number of Feeds:</strong> ${feedProperties.length}</p>
<p><strong>Feeds:</strong></p>
<ul>
${feedProperties.map(f => safeHtml`<li>${f}</li>`)}
</ul>
`;

    section.innerHTML = innerHtml;
}