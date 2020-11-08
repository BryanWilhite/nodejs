import { ajax } from 'rxjs/ajax';

const uri = './index.json';

window.addEventListener('DOMContentLoaded', () => {
    const data$ = ajax.getJSON(uri);

    data$.subscribe(
        appData => console.log({appData}),
        err => console.error(err)
    );
});
