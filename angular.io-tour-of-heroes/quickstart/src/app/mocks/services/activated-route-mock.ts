import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export class ActivatedRouteMock {
    readonly paramMap: Observable<ParamMap>;

    private subject = new ReplaySubject<ParamMap>();

    constructor(initialParams?: Params) {
        this.paramMap = this.subject.asObservable();
        this.setParamMap(initialParams);
    }

    setParamMap(params?: Params) {
        this.subject.next(convertToParamMap(params));
    }
}
