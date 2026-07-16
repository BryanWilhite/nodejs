import { ajax } from 'rxjs/ajax';

import { AppData } from './app-data';
import { display } from './display.function';

const uri = 'https://songhaystorage.blob.core.windows.net/studio-dash/app.json';

window.addEventListener('DOMContentLoaded', () => {
    const data$ = ajax.getJSON<AppData>(uri);

    data$.subscribe({
        next: appData => display(appData),
        error: (e) => console.error(e),
        complete: () => console.debug('ajax complete') 
    });
});
