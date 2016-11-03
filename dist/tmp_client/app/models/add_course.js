"use strict";
var AddCourse = (function () {
    function AddCourse(name, description, start_xp, leader_board, levels, students) {
        this.name = name;
        this.description = description;
        this.start_xp = start_xp;
        this.leader_board = leader_board;
        this.levels = levels;
        this.students = students;
    }
    return AddCourse;
}());
exports.AddCourse = AddCourse;
