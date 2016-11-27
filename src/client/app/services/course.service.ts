import { Injectable }     from '@angular/core';
import {Http, Response, URLSearchParams, Jsonp} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Course} from "../models/course";
import {xhrHeaders} from "./xhr-headers";
import {AuthService} from "../auth/auth.service";
import {AddCourse} from "../models/add_course";

import {apiUrl} from './config';
import {EditXpCourse} from "../models/edit_xp";
import {Level} from "../models/level";
import {Badge} from "../models/badge";


@Injectable()
export class CourseService {

  constructor (private http: Http, private authService: AuthService) {}

  course: Course;
  levels: Level[] = [];
  badges: Badge[] = [];

  private token: string = '';

  ngOnInit(){
    this.token = this.authService.token;
  }

  getCourse (id: any): Observable<Course> {
    return this.http.get(`${apiUrl}course/${id}?token=${this.authService.token}`)
        .map((res) => res.json().data)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllCourse (): Observable<Course[]> {
    return this.http.get(`${apiUrl}course?token=${this.authService.token}`)
        .map((res) => res.json().data)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createNewCourse(newCourse: AddCourse): Observable<AddCourse>{
    let body = JSON.stringify(newCourse);
    return this.http.post(`${apiUrl}course/create?token=${this.authService.token}`, body, xhrHeaders())
        .map((res) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateStudent(student: any): Observable<any>{
    let body = JSON.stringify(student);
    return this.http.post(`${apiUrl}course/add/students?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editCourse(course: Course): Observable<Course>{
    let body = JSON.stringify(course);
    return this.http.put(`${apiUrl}course/edit?token=${this.authService.token}`, body, xhrHeaders())
        .map((res) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  settingCourse(course: EditXpCourse): Observable<EditXpCourse>{
    let body = JSON.stringify(course);
    return this.http.post(`${apiUrl}course/setting?token=${this.authService.token}`, body, xhrHeaders())
        .map((res) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateStatus(course: Course): Observable<Course>{
    let body = JSON.stringify(course);
    return this.http.put(`${apiUrl}course/status?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  //Badge

  getAllBadge (id: any): Observable<Badge[]> {
    return this.http.get(`${apiUrl}course/${id}/badge?token=${this.authService.token}`)
        .map((res) => res.json().data)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  createBadge(badge: Badge): Observable<Badge>{
    let body = JSON.stringify(badge);
    return this.http.post(`${apiUrl}course/create/badge?token=${this.authService.token}`, body, xhrHeaders())
        .map((res) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editBadge(badge: Badge): Observable<Badge>{
    let body = JSON.stringify(badge);
    return this.http.put(`${apiUrl}course/edit/badge?token=${this.authService.token}`, body, xhrHeaders())
        .map((res) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteBadge(id:any){
    return this.http.delete(`${apiUrl}course/delete/badge/${id}?token=${this.authService.token}`)
        .map((res: Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  //highscore

  getHighscore (id: any): Observable<any> {
    return this.http.get(`${apiUrl}course/highscore/${id}?token=${this.authService.token}`)
      .map((res) => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  //updated score

  downloadExcel(id: any): Observable<any>{
    return this.http.get(`${apiUrl}downloadExcel/${id}`)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
