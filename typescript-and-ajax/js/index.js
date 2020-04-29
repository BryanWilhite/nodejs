import { ajax } from 'rxjs/ajax';
import { display } from './display.function';
const uri = 'https://songhaystorage.blob.core.windows.net/studio-dash/app.json';
window.addEventListener('DOMContentLoaded', () => {
    const data$ = ajax.getJSON(uri);
    data$.subscribe(appData => display(appData), err => console.error(err));
});
//# sourceMappingURL=index.js.map