"use strict";
var EditXpCourse = (function () {
    function EditXpCourse(course_id, start_xp, leader_board, levels, students_level) {
        this.course_id = course_id;
        this.start_xp = start_xp;
        this.leader_board = leader_board;
        this.levels = levels;
        this.students_level = students_level;
    }
    return EditXpCourse;
}());
exports.EditXpCourse = EditXpCourse;
