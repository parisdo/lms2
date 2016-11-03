"use strict";
var Badge = (function () {
    function Badge(course_id, badge_id, name, image, xp, id, selected) {
        this.course_id = course_id;
        this.badge_id = badge_id;
        this.name = name;
        this.image = image;
        this.xp = xp;
        this.id = id;
        this.selected = selected;
    }
    return Badge;
}());
exports.Badge = Badge;
