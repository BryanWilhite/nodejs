import { async, TestBed, getTestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroSearchService } from './hero-search.service';

describe('HeroSearchService', () => {
    const testBed: TestBed = getTestBed();
    let service: HeroSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeroSearchService],
            imports: [
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService, {
                    apiBase: 'api',
                    delay: 1
                })
            ]
        });
    });

    it(
        'should load search results',
        async(() => {
            service = testBed.get(HeroSearchService);
            expect(service).not.toBeNull();
            service.search('D').subscribe(value => {
                expect(value).not.toBeUndefined();
                expect(value).not.toBeNull();
                expect(value.length).toBeGreaterThan(1);
            });
        })
    );
});
