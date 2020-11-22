import { ajax } from 'rxjs/ajax';
import { html, render } from 'lit-html';

const uri = './index.json';

interface MyData { title: string; }

function display(parentElement: HTMLElement | null, data: MyData[]): void {
    if (parentElement === null) {
        return;
    }

    const template = html`${data?.map((item) => html`<div><h1>${item.title}</h1></div>`)}`;
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
