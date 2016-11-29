import { Injectable }     from '@angular/core';
import {Http, Response, URLSearchParams, Jsonp} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {apiUrl} from './config';
import {xhrHeaders} from "./xhr-headers";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class WebboardService {


  cousre_id: any;

  constructor (private http: Http,  private authService: AuthService) {}


  createPost(post: any): Observable<any>{
    let body = JSON.stringify(post);
    return this.http.post(`${apiUrl}post/create?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllPost (id: any): Observable<any> {
    return this.http.get(`${apiUrl}post/course/${id}?token=${this.authService.token}`)
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  editPost(post: any): Observable<any>{
    let body = JSON.stringify(post);
    return this.http.post(`${apiUrl}post/edit?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  deletePost(id: any): Observable<any>{
    let body = JSON.stringify(id);
    return this.http.post(`${apiUrl}post/delete?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  postComment(post: any): Observable<any>{
    let body = JSON.stringify(post);
    return this.http.post(`${apiUrl}post/comment?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editComment(post: any): Observable<any>{
    let body = JSON.stringify(post);
    return this.http.post(`${apiUrl}post/comment/edit?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  deleteComment(id: any): Observable<any>{
    let body = JSON.stringify(id);
    return this.http.post(`${apiUrl}post/comment/delete?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  replyComment(post: any): Observable<any>{
    let body = JSON.stringify(post);
    return this.http.post(`${apiUrl}post/replycomment?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  editReplyComment(post: any): Observable<any>{
    let body = JSON.stringify(post);
    return this.http.post(`${apiUrl}post/replycomment/edit?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteReplyComment(id: any): Observable<any>{
    let body = JSON.stringify(id);
    return this.http.post(`${apiUrl}post/replycomment/delete?token=${this.authService.token}`, body, xhrHeaders())
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
