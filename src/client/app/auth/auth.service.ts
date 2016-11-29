import { Injectable }     from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Teacher} from "../models/teacher";
import {xhrHeaders} from "../services/xhr-headers";
import {Student} from "../models/student";
import {Router} from "@angular/router";
import {apiUrl} from '../services/config';

@Injectable()
export class AuthService {

    token: string;
    id: any;
    redirectUrl: string;

    constructor (private http: Http, private  router: Router) {
        this.token = localStorage.getItem('token');
        this.id = localStorage.getItem('id');
    }

    signin (teacher: Teacher): Observable<any> {
        let body = JSON.stringify(teacher);
        return this.http.post(`${apiUrl}user/signin`, body, xhrHeaders())
            .map((res) => res.json())
            .cache();
    }

    studentSigin(student: Student){
        let body = JSON.stringify(student);
        return this.http.post(`${apiUrl}user/signin`, body, xhrHeaders())
            .map((res) => res.json())
            .cache();
    }

    forgotPassword (email: any): Observable<any> {
      let body = JSON.stringify(email);
      return this.http.post(`${apiUrl}password/email`, body, xhrHeaders())
        .map((res) => res.json())
        .cache();
    }

    signout() {
        this.token = undefined;
        this.id = undefined;

        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        return Observable.of(true);
    }

    isLoggedIn(){
        return !!localStorage.getItem('token');
    }

    setToken(token: any, role: string, id?: any){
        this.token = token;
        this.id = id;
        localStorage.setItem('token', this.token);
        localStorage.setItem('role', role);
        localStorage.setItem('id', id);
        return Observable.of('token');
    }

    checkRole(){
        if(localStorage.getItem('role') == 'teacher'){
            return true
        }else {
            return false
        }
    }



}
