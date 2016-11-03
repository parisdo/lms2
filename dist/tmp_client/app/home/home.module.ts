import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import {PageNotFoundCmponent} from "./page-not-found.component";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent, PageNotFoundCmponent],
  exports: [HomeComponent]
})
export class HomeModule { }
