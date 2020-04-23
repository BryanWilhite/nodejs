import { ajax } from 'rxjs/ajax';

import { AppData } from './app-data';
import { display } from './display.function';

const uri = 'https://songhaystorage.blob.core.windows.net/studio-dash/app.json';

window.onload = () => {
    const data$ = ajax.getJSON<AppData>(uri);

    data$.subscribe(
        appData => display(appData),
        err => console.error(err)
    );
};
