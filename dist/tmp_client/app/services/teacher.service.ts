import { Injectable }     from '@angular/core';
import {Http, Response, RequestOptions, Headers, Jsonp} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Teacher} from "../models/teacher";
import {xhrHeaders} from "./xhr-headers";
import {AuthService} from "../auth/auth.service";

import {apiUrl} from './config';

@Injectable()
export class TeacherService {

    teacher: Teacher;

    private teacherUrl = `${apiUrl}teacher`;
    private registrationUrl = `${apiUrl}user/registration`;

    constructor (private http: Http, private authService: AuthService) {}

    getTeacher (): Observable<any> {
        return this.http.get(`${this.teacherUrl}?token=${this.authService.token}`)
            .map((res) => res.json().data.teacher_profile[0])
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }



    addTeacher(teacher: Teacher): Observable<Teacher>{
        let body = JSON.stringify(teacher);
        return this.http.post(`${this.registrationUrl}`, body, xhrHeaders())
            .map((res) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    editTeacherProfile(teacher: Teacher): Observable<Teacher>{
      let body = JSON.stringify(teacher);
      return this.http.put(`${this.teacherUrl}/edit/profile?token=${this.authService.token}`, body, xhrHeaders())
        .map((res) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


}
