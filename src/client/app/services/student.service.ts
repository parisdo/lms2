import { Injectable }     from '@angular/core';
import {Http, Response, URLSearchParams, Jsonp} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {apiUrl} from './config';
import {xhrHeaders} from "./xhr-headers";
import {AuthService} from "../auth/auth.service";
import {Student} from "../models/student";


@Injectable()
export class StudentService {

  students: Student[] = [];

  constructor (private http: Http,  private authService: AuthService) {}

  updateStudentsScore(students: any): Observable<any>{
    let body = JSON.stringify(students);
    return this.http.put(`${apiUrl}students/update/score?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editStudentProfile(student: any): Observable<Student>{
    let body = JSON.stringify(student);
    return this.http.put(`${apiUrl}student/edit/profile?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  deleteStudent(student: any): Observable<any>{
    let body = JSON.stringify(student);
    console.log(body);
    return this.http.post(`${apiUrl}students/delete?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



}
