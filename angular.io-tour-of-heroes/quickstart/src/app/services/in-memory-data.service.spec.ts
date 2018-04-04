import { TestBed, getTestBed } from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    HttpModule,
    Response,
    XHRBackend
} from '@angular/http';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    const testBed: TestBed = getTestBed();
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
});
