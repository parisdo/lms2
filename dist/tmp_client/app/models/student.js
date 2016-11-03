"use strict";
var Student = (function () {
    function Student(student_id, title, name, image, overall_xp, level, course_id, username, password, id, selected, progressType) {
        this.student_id = student_id;
        this.title = title;
        this.name = name;
        this.image = image;
        this.overall_xp = overall_xp;
        this.level = level;
        this.course_id = course_id;
        this.username = username;
        this.password = password;
        this.id = id;
        this.selected = selected;
        this.progressType = progressType;
    }
    return Student;
}());
exports.Student = Student;
