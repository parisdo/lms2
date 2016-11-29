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
        this.image = null;
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

    addBadge(){

        let badge = new Badge(this.course.id, '', this.badgeForm.value.name, this.image, this.badgeForm.value.xp);
        //console.log(badge);

        this.courseService.createBadge(badge)
            .subscribe(
                (data: any) => {
                    //console.log(data);
                    //console.log(data.status);
                    if(data.status == 'success'){
                        this.ngOnInit();
                        this.resetCreateForm();
                    }
                },
                (error) => console.log(error)
            );
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
      console.log(this.selectedBadge);

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


    deleteBadge(){

      this.selectedBadge.badge_id = this.selectedBadge.id;
      console.log(this.selectedBadge);
        this.courseService.deleteBadge(this.selectedBadge.badge_id)
            .subscribe(
                (data: any) => {
                    //console.log(data);
                    //console.log(data.status);
                    if(data.status == 'success'){
                        this.ngOnInit();
                        this.resetEditForm();
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
