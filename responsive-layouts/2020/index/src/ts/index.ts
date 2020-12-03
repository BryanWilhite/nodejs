import { ajax } from 'rxjs/ajax';
import { html, render } from 'lit-html';

const uri = './index.json';

interface MyData { title: string; thumb: string; body: string; }

function display(parentElement: Element | null | undefined, data: MyData[]): void {
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
<div class="even">${getThumbTemplate(item)}</div>
<div class="odd">
    ${getTitleTemplate(item)}
    ${getThumbTemplate(item)}
    ${getBodyTemplate(item)}
</div>
`
            )
    }`;
    render(template, parentElement);
}

window.addEventListener('DOMContentLoaded', () => {
    const data$ = ajax.getJSON<MyData[]>(uri);

    const name = 'main';
    const mainElement = window.document.getElementsByTagName(name)?.item(0);
    const mainSectionElement = mainElement?.getElementsByClassName(name)?.item(0);

    data$.subscribe(
        appData => display(mainSectionElement, appData),
        err => console.error(err)
    );
});
