"use strict";
var Course = (function () {
    function Course(name, description, id, start_xp, leader_board, course_id, status_id) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.start_xp = start_xp;
        this.leader_board = leader_board;
        this.course_id = course_id;
        this.status_id = status_id;
    }
    return Course;
}());
exports.Course = Course;
