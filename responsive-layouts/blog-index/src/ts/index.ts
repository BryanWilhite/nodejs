import { ajax } from 'rxjs/ajax';
import { html, render } from 'lit-html';

const uri = './index.json';

interface MyData { title: string; thumb: string; body: string; }

const rx = {
    client: {
        handleContentLoaded: () => {
            const display = (parentElement: Element | null | undefined, data: MyData[]) => {
                if (!parentElement) {
                    return;
                }

                const getThumbTemplate = (item: MyData) =>
                    html`<span class="thumb">${item.thumb}</span>`;

                const getTitleTemplate = (item: MyData) => html`<h2>${item.title}</h2>`;
                const getBodyTemplate = (item: MyData) => html`<p>${item.body}</p>`;

                const template = html`${
                    data?.map(item =>
                        html`
<div>${getThumbTemplate(item)}</div>
<article>
    ${getTitleTemplate(item)}
    ${getThumbTemplate(item)}
    ${getBodyTemplate(item)}
</article>
`)}`;
                render(template, parentElement);
            };

            const data$ = ajax.getJSON<MyData[]>(uri);

            const mainSectionElement = window.document.querySelector('main > section');

            data$.subscribe(
                appData => display(mainSectionElement, appData),
                err => console.error(err)
            );
        }
    }
};

window.addEventListener('DOMContentLoaded', () => rx.client.handleContentLoaded());
