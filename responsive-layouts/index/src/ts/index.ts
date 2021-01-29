import { ajax } from 'rxjs/ajax';
import { html, render } from 'lit-html';

// TODO: use full Document, Segment and IndexEntry models in `songhay`
interface Document {
    title: string;
}

interface Segment {
    segmentName: string;
}

interface IndexEntry extends Partial<Segment> {
    segments?: IndexEntry[];
    documents?: Partial<Document>[];
}

const rx = {
    client : {
        handleContentLoaded: () => {
            const display = (parentElement: Element | null | undefined, data: IndexEntry[]) => {
                if (!parentElement) {
                    return;
                }

                const getArticleTemplate = (childSegment: IndexEntry) => {
                    return html`<article><h3>${
                        childSegment.segmentName
                    }</h3></article>`;
                };

                const getSectionTemplate = (segment: IndexEntry, index: number) => {

                    const summaryTemplate = html`<summary><h2>${
                        segment.segmentName
                    }</h2></summary>`;

                    const sectionTemplate = html`<section>${
                        segment?.segments?.map(segment => getArticleTemplate(segment))
                    }</section>`;
            
                    const isOpen = index === 0;
            
                    return html`<details ?open=${isOpen}>${summaryTemplate}${sectionTemplate}</details>`;
                }

                const template = html`${data?.map((section, i) => getSectionTemplate(section, i))}`;

                render(template, parentElement);
            };

            const indexDataUri = './index.json';
            const data$ = ajax.getJSON<IndexEntry[]>(indexDataUri);

            const mainElement = window.document.getElementsByTagName('main')?.item(0);
            const mainSectionElement = mainElement?.getElementsByTagName('section')?.item(0);

            data$.subscribe(
                appData => display(mainSectionElement, appData),
                err => console.error(err)
            );
        }
    }
};

window.addEventListener('DOMContentLoaded', () => rx.client.handleContentLoaded());
