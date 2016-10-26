import {Component} from "@angular/core";
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {Validators, FormBuilder} from "@angular/forms";
import {Level} from "../../models/level";
import {msg} from '../../services/message-service';
import {EditXpCourse} from "../../models/edit_xp";
import {Message} from "primeng/components/common/api";
declare var _: any;

@Component({
  moduleId: module.id,
  selector: 'edit-xp',
  templateUrl: 'edit-xp.component.html',
  styleUrls:['edit-xp.component.css']
})

export class EditXPComponent {

  course: Course;

  xpForm: any;

  levelsForm: any;
  levels: Level[] = [];
  current_level: number = 0;
  current_levelEnd: number = 0;
  msgs: Message[] = [];

  constructor(private formBuilder: FormBuilder,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.course = this.courseService.course;
    //console.log(this.course);

    this.course.id = this.courseService.course.id;
    this.levels = this.courseService.levels;
    this.current_level = this.courseService.levels[this.courseService.levels.length - 1].level_id;
    this.current_levelEnd = this.courseService.levels[this.courseService.levels.length - 1].ceiling_xp;

    this.createXpForm();
    this.createLevelsForm();
  }

  createXpForm() {
    this.xpForm = this.formBuilder.group({
      'start_xp': [this.course.start_xp, [Validators.required]],
      'leader_board': [this.course.leader_board, [Validators.required]]
    });
  }

  createLevelsForm() {
    this.levelsForm = this.formBuilder.group({
      'floor_xp': ['', [Validators.required]],
      'ceiling_xp': ['', [Validators.required]]
    });
  }

  addLevel(level: any) {

    if (level.ceiling_xp > level.floor_xp) {

      if (this.current_level == 0) {
        this.newLevel(level);
      } else {

        if (level.floor_xp > this.current_levelEnd) {

          level.floor_xp = (+this.current_levelEnd + 1);
          this.newLevel(level);
        }
      }
    }
  }

  newLevel(level: any) {
    var newLevel = new Level(++this.current_level, level.floor_xp, level.ceiling_xp);
    this.levels.push(newLevel);
    this.current_levelEnd = level.ceiling_xp;
  }

  deleteLevel(level: any) {
    this.current_level -= 1;
    this.current_levelEnd = level.floor_xp - 1;
    _.remove(this.levels, level)
  }

  submit() {

    if (this.levels.length == 0) {
      let level = new Level('1', '1', 10);
      this.levels.push(level)
    }

    let students_level: any;

    this.levels.forEach((level) => {
      if (_.inRange(this.xpForm.value.start_xp, level.floor_xp, level.ceiling_xp)) {
        students_level = level;
      }
    });


    let editXp = new EditXpCourse(
      this.course.id,
      this.xpForm.value.start_xp,
      this.xpForm.value.leader_board,
      this.levels,
      students_level
    );

    console.log(editXp);
    this.courseService.settingCourse(editXp)
      .subscribe(
        (data: any) => {
          if(data.status == 'success'){
            this.showMessage(msg.getUpdateStudentsScoreMessage(200));
          }else {
            this.showMessage(msg.getUpdateStudentsScoreMessage(500));
          }
        },
        (error) => console.log(error)
      );
  }

  showMessage(msg: any){
    this.msgs = [];
    this.msgs.push(msg);
    setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }


  cancel(){
    window.history.back();
  }
}
