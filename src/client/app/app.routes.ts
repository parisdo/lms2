import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import {authProviders} from "./auth/auth.routing";
import {CanDeactivateGuard} from "./auth/can-deactivate-guard.service";

export const routes: Routes = [
  ...HomeRoutes,
];

export const appRoutingProviders: any[] = [
  authProviders,
  CanDeactivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
