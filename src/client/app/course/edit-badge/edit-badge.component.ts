import {Component} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router, NavigationExtras} from "@angular/router";
import {ResizeOptions, ImageResult} from "ng2-imageupload";
import {Badge} from "../../models/badge";
import {FormBuilder, Validators} from "@angular/forms";
import {CourseService} from "../../services/course.service";
import {Course} from "../../models/course";
import {publicUrl} from "../../services/config";
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'edit-badge',
    templateUrl: 'edit-badge.component.html',
    styleUrls:['edit-badge.component.css']
})

export class EditBadgeComponent {

    course: Course;

    image: string = '';
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 80,
        resizeMaxWidth: 80
    };

    badges: Badge[] = [];
    badgePath: any;
    selectedBadge: Badge = new Badge();
    badgeForm: any;

    display: boolean = false;
    message = {
      title: '',
      content: ``,
      button: ''
    };


  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private courseService: CourseService,
        private formBuilder: FormBuilder) {}

    ngOnInit(){

      this.createBadgeForm();

      this.badgePath = `${publicUrl}students/badges/`.length;

      if(localStorage.getItem('course_id') != undefined){
        this.courseService.getCourse(localStorage.getItem('course_id'))
          .subscribe((data: any) => {
            this.course = data.course;
            this.getBadges(this.course.id);
          }, error => console.log(error));
      }else {
        this.router.navigate(['/teach']);
      }

    }

    createBadgeForm(){
        this.badgeForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'image': [''],
            'xp': ['', [Validators.required]]
        });
    }

    resetCreateForm(){
        $('#closeModal').click();
        this.createBadgeForm();
        this.image = '';
        this.isNumber = true;
    }


    getBadges(id: any) {
        this.courseService.getAllBadge(id)
            .subscribe(
                (data:any) => {
                    //console.log(data);
                    this.badges = data.badge;

                    this.badges.map((badge) => {
                       badge.image = `${publicUrl}students/badges/${badge.image}`
                    });
                },
                error =>  console.log(error))
    }

  isNumber: boolean = true;
    addBadge(){

        if(this.image == ''){
          this.image = `data:image/png;base64,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
          `;
        }else {
          this.image = this.image;
        }

        let badge = new Badge(this.course.id, '', this.badgeForm.value.name, this.image, this.badgeForm.value.xp);

        if(this.checkBadge(badge)){
          this.isNumber = true;
          this.courseService.createBadge(badge)
            .subscribe(
              (data: any) => {
                if(data.status == 'success'){
                  this.resetCreateForm();
                  this.ngOnInit();
                  this.image = '';
                }
              },
              (error) => console.log(error)
            );
        }else {
          this.isNumber = false;
        }
    }

    checkBadge(badge: Badge) : boolean{
      let isBadge: boolean = false;

      if(badge.xp > 0){
        isBadge = true;
      }
      return isBadge;
    }


    editBadgeModal(badge: Badge){

      this.selectedBadge = badge;
      this.editBadgeImage = badge.image;
    }

    editBadge(){


      if(this.isEdited){
        this.selectedBadge.image = this.editBadgeImage;
      }else {
        this.selectedBadge.image = this.selectedBadge.image.substring(this.badgePath);
      }

      this.isEdited = false;
      //console.log(this.selectedBadge);

      this.courseService.editBadge(this.selectedBadge)
            .subscribe(
                (data: any) => {
                    //console.log(data);
                    if(data.status == 'success'){
                        this.ngOnInit();
                        this.resetEditForm();
                    }
                },
                (error) => console.log(error)
            );
    }

    selected(imageResult: ImageResult) {
        this.image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }


    isEdited: boolean = false;
    editBadgeImage: string = "";

    selectedBadgeImage(imageResult: ImageResult) {
        this.isEdited = true;
        this.editBadgeImage = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }


    deletePopup(){
      this.resetEditForm();
      this.display = true;
      this.message = {
        title: 'ลบเหรียญ',
        content: `ยืนยันการลบข้อมูลที่เลือก`,
        button: 'ลบ'
      };
    }

    deleteBadge(){

      this.selectedBadge.badge_id = this.selectedBadge.id;
      //console.log(this.selectedBadge);
        this.courseService.deleteBadge(this.selectedBadge.badge_id)
            .subscribe(
                (data: any) => {
                    //console.log(data);
                    //console.log(data.status);
                    if(data.status == 'success'){
                        this.ngOnInit();
                        this.resetEditForm();
                        this.display = false;
                    }
                },
                (error) => console.log(error)
            );
    }

    resetEditForm(){
      $('#closeEditBadgeModal').click();
    }

    cancel(){
      window.history.back();
    }

    ngOnDestroy() {}

}
