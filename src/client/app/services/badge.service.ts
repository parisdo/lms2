import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Course} from "../models/course";
import {Badge} from "../models/badge";


@Injectable()
export class BadgeService {

    constructor (private http: Http) {}
    private courseUrl = 'http://127.0.0.1:5000/api/v1/badge';

    getBadges (): Observable<Badge[]> {
        return this.http.get(this.courseUrl)
            .map((res) => res.json())
            .cache();
    }

}
