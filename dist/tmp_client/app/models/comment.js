"use strict";
var Comments = (function () {
    function Comments(id, detail, updated_at, user_id) {
        this.id = id;
        this.detail = detail;
        this.updated_at = updated_at;
        this.user_id = user_id;
    }
    return Comments;
}());
exports.Comments = Comments;
