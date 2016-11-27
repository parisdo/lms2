import { Component } from '@angular/core';
import {Router, ActivatedRoute, NavigationExtras} from "@angular/router";
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

  student_id: any;

  name: string;
  role: any;
  course_id: any;
  post: Post;
  comments: any[] =[];
  commentForm: any;
  private sub: Subscription;

  student: Student;
  edit_comment_id: any = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router,
              private webboardService: WebboardService, private studentService: StudentService) {}


  ngOnInit() {


    this.student_id = this.authService.id;
    this.role = this.authService.checkRole();

    if(this.role){
      this.name = 'teacher';
    }else {
      this.name = 'student';
    }

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.course_id = +params['id'];
        this.getPost();
        this.createCommentForm();
      })
  }

  createPost(){
    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': this.course_id},
    };

    this.router.navigate([`/webboard/new-post`], navigationExtras);
  }


  getPost(){

    this.webboardService.getAllPost(this.course_id)
      .subscribe(
        (data: any) => {

          if(data.status == 'success'){
            this.post = data.data.post;
            this.comments = data.data.comments;
          }

        },
        (error) => console.log(error)
      );
  }


  isEditPost: boolean = false;

  editPost(id: any, title: any, detail: any){

    let post = {id: id, title: title, detail: detail};
    //console.log(post);

    this.webboardService.editPost(post)
      .subscribe(
        (data: any) => {
          //console.log(data);
          if(data.status == 'success'){
            this.getPost();
            this.isEditPost = !this.isEditPost;
          }
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
    let newComment = new Comments(this.course_id, this.name, this.commentForm.detail);
    //console.log(newComment);

    this.webboardService.postComment(newComment)
      .subscribe(
        (data: any) => {
          //console.log(data);
          if(data.status == 'success'){
            this.getPost();
          }
        },
        (error) => console.log(error)
      );
  }

  editComment(id: any, detail: any){

    this.edit_comment_id = id;
    let editComment = new Comments(id, this.name,detail);

   // console.log(editComment);

    this.webboardService.editComment(editComment)
      .subscribe(
        (data: any) => {
          //console.log(data);
          if(data.status == 'success'){
            this.getPost();
            this.edit_comment_id = null;
          }
        },
        (error) => console.log(error)
      );
  }

  deletePost(id: any){

    let postId = {id: id};
    // console.log(comment_id);

    this.webboardService.deletePost(postId)
      .subscribe(
        (data: any) => {
          location.reload();
        },
        (error) => console.log(error)
      );
  }

  cancelEdit(){
    this.edit_comment_id = null;
  }


  editModeComment(id: any){
    this.edit_comment_id = id;
  }

  deleteComment(id: any){

    let comment_id = {id: id};
   // console.log(comment_id);

    this.webboardService.deleteComment(comment_id)
      .subscribe(
        (data: any) => {
         // console.log(data);
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


  isReply: boolean = false;

  //replyComment

  replyId: any;

  onReply(id?: any){
    this.replyId = id;
    this.isReply = true;
  }

  onShowReplyComment(id?: any){

    this.comments.forEach((comment: any) => {
      if(id == comment.comment.id){
        comment.comment.showReplyComment = !comment.comment.showReplyComment;
      }
    });
  }

  cancelReply(){
    this.isReply = false;
  }

  replyComment(id?: any, detail?: any){
    let replyComment = new Comments(id, this.name, detail);

    this.webboardService.replyComment(replyComment)
      .subscribe(
        (data: any) => {
          //console.log(data);
          if(data.status == 'success'){
            this.getPost();
            this.isReply = false;
          }
        },
        (error) => console.log(error)
      );

  }

  deleteReplyComment(id: any){

    console.log(id);

    let replyComentId = {id: id};

    this.webboardService.deleteReplyComment(replyComentId)
      .subscribe(
        (data: any) => {
          if(data.status == 'success'){
            this.getPost();
          }
        },
        (error) => console.log(error)
      );
  }


}
