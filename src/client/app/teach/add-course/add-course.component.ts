import { Component } from '@angular/core';
import {Student} from "../../models/student";
import {Level} from "../../models/level";
import {FormBuilder, Validators} from "@angular/forms";
import {ImageResult, ResizeOptions} from "ng2-imageupload";
import {Router} from "@angular/router";

declare var _ : any;
import {CourseService} from "../../services/course.service";
import {AddCourse} from "../../models/add_course";

export class Tab{
    constructor(public id: number, public name: string){}
}

@Component({
  moduleId: module.id,
  selector: 'app-add-course',
    templateUrl: 'add-course.component.html',
    styleUrls: ['add-course.component.css']
})

export class AddCourseComponent {

    tabIndex: number = 1;
    tabName: string = '';
    tabProgress = [
        new Tab(1, 'เพิ่มชั้นเรียน'),
        new Tab(2, 'เพิ่มนักเรียน'),
        new Tab(3, 'เพิ่มรูปนักเรียน'),
        new Tab(4, 'กำหนดค่าเริ่มต้น')
    ];

    constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService){
        this.createCourseForm();
        this.createStudentsForm();
        this.createXpForm();
        this.createLevelsForm();
    }


    ngOnInit(){
        this.tabName = this.getTabName().name;
    }

    next(){
        this.tabIndex == 4 ?  this.tabIndex = 4: this.tabIndex++;
        this.tabName = this.getTabName().name;
    }

    getTabName(){
        return this.tabProgress.find(index => index.id == this.tabIndex);
    }

    previous(){
        this.tabIndex == 1 ?  this.tabIndex = 1: this.tabIndex--;
        this.tabName = this.getTabName().name;
    }

    popupMessage: any = {
        "title": "เพิ่มวิชาเรียบเรียบร้อย",
        "message": ""
    };


    //////////// Step 1 //////////////////
    courseForm: any;
    createCourseForm(){
        this.courseForm = this.formBuilder.group({
            'name': ['', [Validators.required]],
            'description': ['']
        });
    }

    ////////////////// Step 2 //////////////////
    studentsForm: any;
    createStudentsForm(){
        this.studentsForm = this.formBuilder.group({
            'student_id': ['', [Validators.required]],
            'student_title': ['mr'],
            'student_name': ['', [Validators.required]]
        });
    }


    check: string = 'excel';

    onCheck(check: string){
        this.check = check;
    }

    students: Student[] = [];
    editStudentMode: boolean = false;
    selectedIndex: any;
    addStudent(student: any){

        let fakeImage = (student.student_title == 'mr' || student.student_title == 'boy'?
            "data:image/jpeg;base64,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" :
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCACWAJYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aiiigAooooAKKKjlmjgjMkrqijuTQG5JRWJc+JIUyttEZD/ebgfl1P6Vmza5fzE4lEYI6IuP160ro6YYWpLyOtpK4h7u5kGHuJWHozk1Hub+8fzpcxssE/5jvKK4lb67TG26mGOg3nFXIfEF9GfnZJR/tLj+VFyJYOa2Z1VFZVr4gtZyFmBgY/3uV/OtRWV1DKQykZBByDVHNOEoO0kLRRRQQFFFFABRRRQAUUUUAFFFYms6x5O61tW/edHcfw+w9/5fyC6dOVSVkT6lrcVnmKHEs3QjPC/X/CubuLma6k8yeQu3v0H0FRUVDdz16VGNNabhRRRSNgoprOiDLsFHucVWvdTsdOiWW8uUhR2Cgk9Sen8qBNpbluioLa9tL1S1pcwzqvBMThsflU9A07hVqy1G4sXzE+U7o3KmqtFApRUlZnY2GpwagnyHbIBloz1H+Iq5XCRSvDKskTFXU5BFdXpeqJqEWGwsyj5l9fce1WmeXXw/J70djQooopnIFFFFABRRTXdY0Z3YKqjJJOABQBQ1jUfsNttjI8+TheM4Hc1yZJJyTkmrF9dte3jznIBOFB7Dt/n1qvUN3PZoUvZw8woorlvFvi0aODZWRVr1h8zHkQg9yPX0H4/VGk5qCuzQ1zxPp+hIVlfzbgj5YEPze2f7o/yAa4LVPGusai7CKc2cOeEgOD14y3XP0wPasGSR5ZGkkdndzlmY5JPqTTatI8ypiJz20QrMzsWZizE5JJyTSUUUznHxTS28qywyPHIpyroxBH0IrrNF8fXloVh1MG6hHHmKAJF/o348+9chRQXCpKDvFnt1lfWuo2y3NnOs0TfxKeh9COx9jVivGtF1u80O78+1bKtxJE33XHv7+hr1fR9Wtta09Lu2PB4dD1Ru4NQ1Y9OjXVTTqXqkgnktp0miOHQ5FR0Ujdq6sztbK7S9tUnTjPVc/dPcVYrl9AvTBeeQzfu5uOT0bt/h+VdRVpnjVqfs52CiiimYhWZr9z5GnFFOGmO3g4OOp/w/GtOua8Sys15FFxtSPcPXJPP8hSexvh481RIx6KKKg9kxvFGupoWlmVcG5lykCk9/730H+A715JJI8sjSyOXdyWZmOSSepNdB44v2vPEk0e8NHbARIAeM4y345JH4Cudq0jycRUc526IKKKKZzhRRRQAUVteHvD767DqpTfusrJp02jOWDD5ffK7se+KxaACtnwzrj6HqySlm+zSkJOueCP72PUdfzHesaigcZOLuj3UEMAQQQeQR3pawPBV+b/w1BuJL25MLEjHTp/46VrfrM9uMuaKYqsVYMpIIOQR2rtrScXNpFMMfOoJx2PcfnXEV0/h2Uvp5jJz5bkAegPP881UTkxkbwUuxrUUUVR5gVyGt7v7YuNxyMrt9htH/ANeuvrkNaYNrNyAeVKg/98g/1pPY68H/ABPkUaKKKg9U8h8WWhs/E16nOJJPNBI67vmP6kj8Kpadpd9q919l0+1kuZsbtka5wOmT6Dkcmu0+I+mhoLbU0HzIfJk69Dkr9MHP/fQpvwe/5Gy6/wCvF/8A0ZHVo8avHlqNFG1+F3iq4k2yWcVsuPvyzoR/46Sf0rQi+D2utIolvtPRCfmKu7EfhtGfzr2OimY3PKz8GJsca6mf+vY//FVBcfBrUFhzbavbSS5+7JGyL+Yz/KvW6KBHH/Drwpc+GtKuTfoqXl1L86q+4BFyF6cd2P0Irynxd4cuPDeuz27wMlrI7NavkkNHngZ9QCAf/rivoUEHpVXUtLsdYs2tNQtY7iFudrjoemQeoPJ5HNAHzRRXVeGPDGm+INMdZb64tNSlnMVqWiJt3IQNtLY4Y89/Tg9K5iWGSCVopkaN0JVlYYIIOCPzFAzvvhrMzWV9CT8qSKwHuQQf/QRXa1x/w4gCaRdXHOZJ9v4BR/8AFGuwqHuezh/4SCt7wwf+Pkf7v9awa3fDHW5/4D/Whbk4n+EzoKKKKs8cK5PX4449Yk2n55EWRh6dVH/oNdZWF4nhYx284PyqxRgFz15Bz2AwfzpPY6MNLlqo5+iiioPYMHxtj/hEr3/tn/6Gtcp8MJ5IfHVmiMQsySo4HcbC2PzUflWx8R7sR6Va2gLBp5S/HQqo5B/Fh+Vch4W1IaR4o06+ZxHHHOokY9kPysf++SatbHl4t3qWPdvFGkz674cvNMt5xBLOoCu2ccMDg47HGPxqxp1rHomh21rNcgx2VuqPPJ8owq8scngcevFXqrajZR6lptzYzFhHcxNExXqAwxke/NM4xunapYatb/aNPu4rmIHBaNs4PofQ/Wn6hbyXmnXNrDO1vJNC8aTL1jJBAYcjkdetc74V8I2+mfZdTntXs9TW38i4jinzHIR8u8gcEkAH0yckZ5rqqAMTwj4ffw14fh06S48+UEvIw+6GPUL7D9evGcVt1Sj1azm1iXSonZ7mCMSTBVO2MHG0E9ATnIHoDU95dR2VlPdy/wCrgjaRseijJ/lQB4x4Y8R6FpPhdY9RSe4vLbU/tkFvENoZhGAhZugXOenPHQjg8je3ct/fXF5PjzbiVpX2jAyxJOPxNQUUDPX/AApbfZfDFhHu3bovMzj+8S2Pwzites/QF2+HtOGc/wCixn/x0VoVme5D4EFdF4ZixbTy5+84X8h/9eudrsNIg+z6ZCvGWXeeMdef/rfhTRz4uVqdu5doooqzygqtqFoL6wmtshS6/KxzhWHKkgEZAIHGeelWaKBp2d0cCM8hlKsCQynGVI6g47g0ta/iKx+z3H25c+XOwWT7x2vjAPoAQAOwz6lqyKhnt0qiqRUjgviXu8zTiT8uJMD3+XP9K4avXvEugpr+m+SGWO4jO6GQjofQ98H/AAPOMV5Te2F3p1wbe8geGQdnHUdMg9x7iqR5+Kg1Ny6M9w+H3iVfEPh6NJZC17ZgRT7jkt/dfqScgcn1Bo1XxfP4d8QSQ61ZMmkShPs19CjNtbHzCT8c4xzgdDnI8X0TWr7QNTj1DT5dkqcFTysi91Ydwf8AAjBANe2+GvHGj+J41iSQW94RhrWYjcTjJ2n+IcHpzxyBTOQs2/jTwzcwiWPW7MKe0kgRvybBqK48a6QWNtpc39q37j9zbWuW3nOOXxtUc5JJ4GavP4a0CRy76HpzMxyWa0Qk/pVy0sbPT4vJsrWG2jznZDGEGfoKBGd4e0WTSori4vJVn1G/k867lUHbnsi552KOBn9M4FL4g6oul+DL5iV33KfZowf4i/B/8d3H8K3ry8ttPtZLq8njggjGXkkbAFeIePvF48UaoiWpddPtciIMMGRj1cj9AD29MkUAcnRRRQUeqeBr03nhmJWLFrZ2hJbvjkY+gYD8K6KuV+HltJD4feVwQs87MnPUAAZ/MH8q6qoZ7NFt01ctaba/bL6OEjKZ3P8AQf5x+NdnWXodh9ktPNkXEsvJBGCo7D/P9K1KpI83E1OeemyCiiimcwUUUUAMliSaJ4pF3I4KsPUVx19pk+mSCORzNG3+rmIwWHo2OA304PUY6DtKjuIIrqB4Jl3RuMEdP/1Umrm1Gs6Ur9DhqiuLaC6i8q5gjmjJzskUMPyNX7/S7jSxulfzYC+1JgOcHpuHY9s9CcdMgVVqD14TjNXRRi0TSYZVli020SRSGVlhUFT6jjis/V/B2k6s7TGM21wxyZIeNx9x0PJ+vvW9SgFjgfqcYoBwg1ZrQ5GS18Y+HrOaaw8Sma3hiLstwu4gKM4UMGA49xTrjU/iBb+FB4kPiCzezKI+1IU3/MwXGDHjIJ557Vqm3uNT0+1v7iaWOHUrlILG0QYV0O7LzH7xBUM21SvAAzk5FFPm+AhBDcA9P+vmrR5FX2d/cMfWvDl9q1yif8JOmo3a7i0NzLgqep2qCcduMDpWIPA/iEtj7EoHr5yf412PhHTdN8U2F1omtaTaQXlvFHNDd2sSxO8brlWJUYyAVPPXIyMg1b8MXF88d/puoMZrnSp/JklwfmU52sSeudp59MdzQ7o1pqlUlZqxyCfDrWGCl7izQHqN7Ej/AMdra074dWNvKJL65e7A6Rqvlr+PJJ/MV2FISACScAd6m7O2OGpx1sIiJFGscaKiIAFVRgADoAK29F0gzMl3cZEanKJ/ePqfb+f06u0rQ3dxPeptQAFYz1Y+/oPb/J6HpwKaRz4jEK3JAWiiiqPPCiiigAooooAKKKKAE6jFYV94Zj2FtNKQMoOIG/1Z4OACOU5I6ZAA4Wt6igqE5Qd4s4e7tbiwLG6geJFBPmkZTAIGSw4GcjAOD7U6bT3uvDGqiFPNuJ7SaKJR1JKEAfUk121VjZxh3eMKhdtzYXGT6n34pWOieJlOHKzzCyu5PE/gfSF0KeEaxorxSfZHfDP5a7MHkcMCDnp2z1qa58fXEVr/AGVf+DL0XUytEtoB+7mUD5tp28jGegIx3rqdR+HfhvVL17u70yJppDl3R3j3HqSQpAJ569au6P4P0XQdx0yyigZuGfBZyOONzEnHA4zimcpyXg7xNoc8F1qt5qdjaXt2yrJbtJ5QhRBhEUMfmwMnI7tjtWp4ZtWur7WNekjZItWlQQxuCN0Ma7Fcg4I3cnB7Yrom8OaO979tfTrVrrcG88wIXz67sZzV9YI1/hz9aAOVg0a8uZSEiMcQYjfMCvAODx16ZI4wfWtzTtEt7EpK5M1wo/1hGADgZwvbp7kZPNaIGBilpWN6lec1ZvQKKKKZgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/Z");
        let newStudent: Student = new Student(student.student_id, student.student_title, student.student_name, fakeImage);
        this.students.push(newStudent);
        this.createStudentsForm();
    }

    editStudent(index: any){
      //console.log(index);
      this.selectedIndex = index;
      this.editStudentMode = !this.editStudentMode;
    }

    deleteStudent(student: any){
        _.remove(this.students, student)
    }
    ////////////////// Step 3 //////////////////
    image: string = '';
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 150,
        resizeMaxWidth: 150
    };

    selected(imageResult: ImageResult, student: any) {

        this.students[this.students.indexOf(student)].image = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

    ////////////////// Step 4 //////////////////
    xpForm: any;
    createXpForm(){
        this.xpForm = this.formBuilder.group({
            'start_xp':   ['1', [Validators.required]],
            'leader_board': ['10', [Validators.required]]
        });
    }

    levelsForm: any;
    createLevelsForm(){
        this.levelsForm = this.formBuilder.group({
            'floor_xp':   ['', [Validators.required]],
            'ceiling_xp':     ['', [Validators.required]]
        });
    }

    levels: Level[] = [];

    current_level: number = 0;
    current_levelEnd: number = 0;

    addLevel(level: any){

        if(level.ceiling_xp > level.floor_xp && level.floor_xp > 0){

            if(this.current_level == 0){
                level.floor_xp = 1;
                this.newLevel(level);
            }else {

                if(level.floor_xp > this.current_levelEnd){

                    level.floor_xp = (+this.current_levelEnd + 1);
                    this.newLevel(level);
                }
            }
        }
    }

    newLevel(level: any){
        var newLevel = new Level(++this.current_level, level.floor_xp, level.ceiling_xp);
        this.levels.push(newLevel);
        this.current_levelEnd = level.ceiling_xp;
    }

    deleteLevel(level: any){
        // this.current_levelEnd = 0;
        this.current_level -= 1;
        this.current_levelEnd = level.floor_xp - 1;
        _.remove(this.levels, level)
    }


    //Submit All Form
    submit(){

      if(this.levels.length == 0){
        let level = new Level('1','1',10);
        this.levels.push(level)
      }


        let studentLevel: any;

        this.levels.forEach((level) => {
            if(_.inRange(this.xpForm.value.start_xp, level.floor_xp, level.ceiling_xp) ){
                studentLevel = level;
            }
        });

        this.students.forEach((student) => {
            student.level = studentLevel.level_id;
            student.overall_xp = this.xpForm.value.start_xp;
        });


        let newCourse = new AddCourse(
                this.courseForm.value.name,
                this.courseForm.value.description,
                this.xpForm.value.start_xp,
                this.xpForm.value.leader_board,
                this.levels,
                this.students
        );


        this.courseService.createNewCourse(newCourse)
            .subscribe(
                (data: any) => {
                    //console.log(data);
                    //console.log(data.status);
                    this.router.navigate(['/teach']);
                },
                (error) => console.log(error)
            );
    }

    cancel(){
        window.history.back();
    }


}
