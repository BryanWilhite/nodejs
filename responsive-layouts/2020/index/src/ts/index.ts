import { ajax } from 'rxjs/ajax';
import { html, render } from 'lit-html';

const uri = './index.json';

interface MyData { title: string; thumb: string; body: string; }

function display(parentElement: HTMLElement | null, data: MyData[]): void {
    if (parentElement === null) {
        return;
    }

    const template = html`${
        data?.map(item =>
            html`
<div class="even thumb">${item.thumb}</div><div class="even title"><h2>${item.title}</h2></div>
<div class="odd"><h2>${item.title}</h2><span class="thumb">${item.thumb}</span><p>${item.body}</p></div>
`
            )
    }`;
    render(template, parentElement);
}

window.addEventListener('DOMContentLoaded', () => {
    const data$ = ajax.getJSON<MyData[]>(uri);

    const mainElement = window.document.getElementsByTagName('main')?.item(0);

    data$.subscribe(
        appData => display(mainElement, appData),
        err => console.error(err)
    );
});
