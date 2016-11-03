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
    redirectUrl: string;

    constructor (private http: Http, private  router: Router) {
        this.token = localStorage.getItem('token');
    }

    upload(data: any){

        console.log(data);
        let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();


        for (let i = 0; i < data.length; i++) {
            formData.append("uploads[]", data[i], data[i].name);
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('success');
                    console.log(xhr.response);
                } else {
                    console.log('error');
                    console.log(xhr.response);
                }
            }
        };

        xhr.open('POST', 'http://54.179.160.42/api/v1/upload', true);
        xhr.send(formData);
        console.log(formData);

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

    signout() {
        this.token = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        return Observable.of(true);
    }

    isLoggedIn(){
        return !!localStorage.getItem('token');
    }

    setToken(token: any, role: string){
        this.token = token;
        localStorage.setItem('token', this.token);
        localStorage.setItem('role', role);
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
