import { ajax } from 'rxjs/ajax';

const uri = 'https://songhaystorage.blob.core.windows.net/studio-dash/app.json';

window.onload = () => {
    const data$ = ajax.getJSON(uri);

    data$.subscribe(
        res => console.log(res),
        err => console.error(err)
    );
};
