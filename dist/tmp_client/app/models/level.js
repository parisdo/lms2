"use strict";
var Level = (function () {
    function Level(level_id, floor_xp, ceiling_xp) {
        this.level_id = level_id;
        this.floor_xp = floor_xp;
        this.ceiling_xp = ceiling_xp;
    }
    return Level;
}());
exports.Level = Level;
