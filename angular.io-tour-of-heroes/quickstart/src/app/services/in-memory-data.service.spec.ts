import { async, TestBed, getTestBed } from '@angular/core/testing';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
    const testBed: TestBed = getTestBed();
    const heroesUrl = 'api/heroes';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService, {
                    apiBase: 'api',
                    delay: 1
                })
            ]
        });
    });

    it('should get a hero', (done: DoneFn) => {
        const http = testBed.get(Http);
        const id = 0;
        const url = `${heroesUrl}/${id}`;
        http
            .get(url)
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

                const jO = response.json();
                expect(jO.data).not.toBeUndefined();
                expect(jO.data['id']).toBe(id);
            });
    });

    it(
        'should get heroes (with async)',
        async(() => {
            const http = testBed.get(Http);
            const term = 'a';
            const url = `${heroesUrl}/?name=${term}`;
            http
                .get(url)
                .toPromise()
                .catch((response: Response) => {
                    expect(response).toBeUndefined();
                })
                .then((responseOrVoid: Response | void) => {
                    const response = <Response>responseOrVoid;
                    expect(response).not.toBeNull();
                    expect(response.ok).toBe(true);

                    const jO = response.json();
                    expect(jO.data).not.toBeUndefined();
                    expect((jO.data as Array<any>).length).toBeGreaterThan(1);
                });
        })
    );
});
