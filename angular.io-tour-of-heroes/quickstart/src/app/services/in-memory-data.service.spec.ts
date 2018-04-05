import { TestBed, getTestBed } from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    HttpModule,
    Response,
    XHRBackend
} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    const testBed: TestBed = getTestBed();
    const heroesUrl = 'api/heroes';
    let service: InMemoryDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                InMemoryDataService,
                {
                    deps: [XHRBackend, BaseRequestOptions],
                    provide: Http,
                    useFactory: (
                        backend: XHRBackend,
                        defaultOptions: BaseRequestOptions
                    ) => new Http(backend, defaultOptions)
                }
            ],
            imports: [HttpModule]
        });
    });

    it('should get a hero', (done: DoneFn) => {
        const http = testBed.get(Http);
        const id = 0;
        const url = `${heroesUrl}/${id}`;
        http.get(url)
            .toPromise()
            .catch((response: Response) => {
                expect(response).toBeUndefined();

                done();
            })
            .then((responseOrVoid: Response | void) => {
                const response = <Response>responseOrVoid;
                expect(response).not.toBeNull();
                expect(response.ok).toBe(true);

                done();
            });
    });
});
