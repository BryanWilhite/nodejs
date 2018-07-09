import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'my-route',
    styleUrls: ['./route.component.css'],
    templateUrl: './route.component.html'
})
export class RouteComponent implements OnInit {
    constructor(private route: ActivatedRoute, private location: Location) {}

    ngOnInit(): void {
        this.route.url.subscribe((segments: UrlSegment[]) => {
            // console.log({ segments });
            if (!segments) {
                return;
            }
            if (!segments.length) {
                return;
            }

            const path = segments[0].path;
            switch (path) {
                case 'static':
                    this.location.go('./app/assets/static.html');
                    break;

                default:
                    break;
            }
        });
    }
}
