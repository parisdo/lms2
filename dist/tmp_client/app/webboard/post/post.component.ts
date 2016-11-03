import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../../auth/auth.service";
import {WebboardService} from "../../services/webboard.service";
import {Post} from "../../models/post";
import {FormBuilder, Validators} from "@angular/forms";
import {Comments} from "../../models/comment";
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
    moduleId: module.id,
    selector: 'lms-post',
    templateUrl: 'post.component.html',
    styleUrls:['post.component.css']
})
export class PostComponent {

  role: any;
  course_id: any;
  post: Post;
  comments: any[] =[];
  commentForm: any;
  private sub: Subscription;

  student: Student;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router,
              private webboardService: WebboardService, private studentService: StudentService) {}


  ngOnInit() {

    this.student = this.studentService.student;
    console.log(this.student);

    this.role = this.authService.checkRole();
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.course_id = +params['id'];
        this.webboardService.cousre_id = this.course_id;
        console.log(this.course_id);
        this.getPost();
        this.createCommentForm();
      })
  }


  getPost(){
    this.webboardService.getAllPost(this.course_id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.post = data.post;
          this.comments = data.comments;
        },
        (error) => console.log(error)
      );
  }

  createCommentForm() {
    this.commentForm = this.formBuilder.group({
      'detail': ['', [Validators.required]]
    });
  }


  postComment(){

    let newComment = new Comments(this.course_id, this.commentForm.detail);
    console.log(newComment);

    this.webboardService.postComment(newComment)
      .subscribe(
        (data: any) => {
          console.log(data);
          if(data.status == 'success'){
            this.getPost();
          }
        },
        (error) => console.log(error)
      );
  }

  editPost(id: any, detail: any){


    let editComment = new Comments(id, detail);

    console.log(editComment);

    this.webboardService.editComment(editComment)
      .subscribe(
        (data: any) => {
          console.log(data);
          if(data.status == 'success'){
            this.getPost();
            this.edit_comment_id = null;
          }
        },
        (error) => console.log(error)
      );
  }

  cancleEdit(){
    this.edit_comment_id = null;
  }

  edit_comment_id: any;

  editModeComment(id: any){
    this.edit_comment_id = id;
  }

  deletePost(id: any){

    let comment_id = {id: id};
    console.log(comment_id);

    this.webboardService.deleteComment(comment_id)
      .subscribe(
        (data: any) => {
          console.log(data);
          if(data.status == 'success'){
            this.getPost();
          }
        },
        (error) => console.log(error)
      );
  }

  reset(){
    this.createCommentForm();
  }

  cancel(){
    window.history.back();
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
