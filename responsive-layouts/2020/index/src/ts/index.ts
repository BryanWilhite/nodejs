import { ajax } from 'rxjs/ajax';
import { html, render } from 'lit-html';

const uri = './index.json';

interface MyData { title: string; articles: MyData[]; }

function display(parentElement: Element | null | undefined, data: MyData[]): void {
    if (!parentElement) {
        return;
    }

    const getArticleTemplate = (article: MyData) => {
        return html`<article><h3>${
            article.title
        }</h3></article>`;
    };

    const getSectionTemplate = (section: MyData, index: number) => {

        const summaryTemplate = html`<summary><h2>${
            section.title
        }</h2></summary>`;

        const sectionTemplate = html`<section>${
            section?.articles?.map(article => getArticleTemplate(article))
        }</section>`;

        const isOpen = index === 0;

        return html`<details ?open=${isOpen}>${summaryTemplate}${sectionTemplate}</details>`;
    }

    const template = html`${data?.map((section, i) => getSectionTemplate(section, i))}`;

    render(template, parentElement);
}

window.addEventListener('DOMContentLoaded', () => {
    const data$ = ajax.getJSON<MyData[]>(uri);

    const mainElement = window.document.getElementsByTagName('main')?.item(0);
    const mainSectionElement = mainElement?.getElementsByTagName('section')?.item(0);

    data$.subscribe(
        appData => display(mainSectionElement, appData),
        err => console.error(err)
    );
});
