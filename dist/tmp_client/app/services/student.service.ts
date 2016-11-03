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

  student: Student;
  students: Student[] = [];

  constructor (private http: Http,  private authService: AuthService) {}


    getStudent (id: any): Observable<any> {
      return this.http.get(`${apiUrl}student/${id}?token=${this.authService.token}`)
        .map((res) => res.json().data)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }



  getStudentBadge (id: any): Observable<any> {
    return this.http.get(`${apiUrl}student/${id}/badge?token=${this.authService.token}`)
      .map((res) => res.json().data.badge)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  updateStudentsScore(students: any): Observable<any>{
    let body = JSON.stringify(students);
    return this.http.post(`${apiUrl}students/update/score?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateStudentsBadge(students: any): Observable<any>{
    let body = JSON.stringify(students);
    return this.http.post(`${apiUrl}students/update/scoreandbadge?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editStudent(student: any): Observable<Student>{
    let body = JSON.stringify(student);
    return this.http.put(`${apiUrl}student/edit?token=${this.authService.token}`, body, xhrHeaders())
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
    //console.log(body);
    return this.http.post(`${apiUrl}students/delete?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  deleteStudentBadge(badge: any): Observable<any>{
    let body = JSON.stringify(badge);
    console.log(body);
    return this.http.post(`${apiUrl}student/delete/badge?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
