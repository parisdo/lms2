import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {WebboardService} from "../../services/webboard.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'new-post',
    templateUrl: 'new-post.component.html',
})
export class NewPostComponent {


  postForm: any;

  constructor(private formBuilder: FormBuilder, private webboardService: WebboardService, private router: Router) {

     this.createForm();
  }

  createForm() {
    this.postForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'detail': ['', [Validators.required]]
    });
  }

  createPost(){

    let newPost = new Post(this.webboardService.cousre_id, this.postForm.title, this.postForm.detail);

    console.log(newPost);

    this.webboardService.postComment(newPost)
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log(data.status);
        },
        (error) => console.log(error)
      );
  }

  cancel(){
    window.history.back();
  }



}
