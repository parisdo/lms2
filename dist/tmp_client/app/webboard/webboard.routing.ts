import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WebboardComponent} from "./webboard.component";
import {WebboardListComponent} from "./webboard-list/webboard-list.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {PostComponent} from "./post/post.component";

const webboardRoutes: Routes = [
    {
        path: 'webboard',
        component: WebboardComponent,
        children: [
            {path: '',                            component: WebboardListComponent},
            {path: 'new-post',                    component: NewPostComponent},
            {path: 'post',                        component: PostComponent}
        ]
    }
];

export const webboardRouting: ModuleWithProviders = RouterModule.forChild(webboardRoutes);
