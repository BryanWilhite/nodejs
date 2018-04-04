import { TestBed, getTestBed } from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    HttpModule,
    Response,
    XHRBackend
} from '@angular/http';

import { HeroSearchService } from './hero-search.service';

describe('HeroSearchService', () => {
    const testBed: TestBed = getTestBed();
    let service: HeroSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                HeroSearchService,
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

    // it('should load search results', (done: DoneFn) => {
    //     service = testBed.get(HeroSearchService);
    //     expect(service).not.toBeNull();
    //     service
    //         .search('D')
    //         .subscribe(value => {
    //             console.log(value);
    //             done();
    //         });
    // });
});
