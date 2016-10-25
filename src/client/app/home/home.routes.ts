import { Route } from '@angular/router';
import { HomeComponent } from './index';
import {PageNotFoundCmponent} from "./page-not-found.component";

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  { path: '**', component: PageNotFoundCmponent }
];
