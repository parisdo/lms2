"use strict";
var EditXpCourse = (function () {
    function EditXpCourse(course_id, start_xp, leader_board, levels) {
        this.course_id = course_id;
        this.start_xp = start_xp;
        this.leader_board = leader_board;
        this.levels = levels;
    }
    return EditXpCourse;
}());
exports.EditXpCourse = EditXpCourse;
