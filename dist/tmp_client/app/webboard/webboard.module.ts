import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {webboardRouting} from "./webboard.routing";
import {WebboardComponent} from "./webboard.component";
import {WebboardListComponent} from "./webboard-list/webboard-list.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {PostComponent} from "./post/post.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,

        webboardRouting
    ],
    declarations: [
       WebboardComponent,
        WebboardListComponent,
        NewPostComponent,
        PostComponent
    ]
})
export class WebboardModule {}
