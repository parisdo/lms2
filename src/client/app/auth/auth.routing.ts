import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";

import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {AuthComponent} from "./auth.component";

const authRoutes: Routes = [{
  path: 'auth',
  component: AuthComponent,
  children: [
    { path: 'signin',  component: SigninComponent },
    { path: 'signup',  component: SignupComponent },
  ]
}];

export const authProviders = [
  AuthGuard,
  AuthService
];



export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);
