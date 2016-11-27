import { Component } from '@angular/core';
import { Config } from './shared/index';
import {Router, Routes, NavigationStart} from "@angular/router";
import {AuthService} from "./auth/auth.service";
import * as jwt from 'angular2-jwt/angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {

  constructor(private router : Router, private authService: AuthService) {

    //console.log('Environment config', Config);

    router.events.subscribe((event: any) => {

      if(event instanceof NavigationStart){
        window.scrollTo(0, 0);
      }

    });

    let token = authService.token;
    let isTokenNotExpired: boolean;
    isTokenNotExpired = tokenNotExpired(null, token);

    if(!isTokenNotExpired){
      console.log("token expired");

      authService.signout().subscribe(
        () => {
          this.router.navigate(['/auth/signin']);
        }
      );

    }else {
      console.log("token not expired");
    }


  }

}
