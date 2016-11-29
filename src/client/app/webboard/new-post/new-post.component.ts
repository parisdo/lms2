import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {WebboardService} from "../../services/webboard.service";
import {Router, ActivatedRoute, NavigationExtras} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
    moduleId: module.id,
    selector: 'new-post',
    templateUrl: 'new-post.component.html',
    styleUrls:['new-post.component.css']
})
export class NewPostComponent {

  course_id: any;
  postForm: any;
  private sub: Subscription;

  constructor(private formBuilder: FormBuilder, private webboardService: WebboardService,
              private route: ActivatedRoute, private router: Router) {

     this.createForm();
  }

  ngOnInit(){
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.course_id = +params['id'];
        console.log(this.course_id);
      })
  }


  createForm() {
    this.postForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'detail': ['', [Validators.required]]
    });
  }

  createPost(){

    let newPost = new Post(this.course_id, this.postForm.title, this.postForm.detail);

    console.log(newPost);

    this.webboardService.createPost(newPost)
      .subscribe(
        (data: any) => {


          if(data.status == 'success'){

            let navigationExtras: NavigationExtras = {
              queryParams: { 'id': this.course_id},
            };

            this.router.navigate([`/webboard/post`], navigationExtras);

          }


        },
        (error) => console.log(error)
      );
  }

  cancel(){
    window.history.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
