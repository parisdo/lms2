import {Component} from "@angular/core";
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {Validators, FormBuilder} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'edit-course',
    templateUrl: 'edit-course.component.html',
})
export class EditCourseComponent {

    course: Course;

    constructor(private formBuilder: FormBuilder,
                private courseService: CourseService){}

    ngOnInit(){
        this.course = this.courseService.course;
        this.createCourseForm();
    }

    courseForm: any;
    createCourseForm(){
        this.courseForm = this.formBuilder.group({
            'course_id': [this.course.id],
            'name': [this.course.name, [Validators.required]],
            'description': [this.course.description, [Validators.required]]
        });
    }


    submit(){

        console.log(this.courseForm.value);
        this.courseService.editCourse(this.courseForm.value)
            .subscribe(
                (data: any) => {
                    console.log(data);
                },
                (error) => console.log(error)
            );
    }

    cancel(){
        window.history.back();
    }

    ngOnDestroy() {

    }

}
