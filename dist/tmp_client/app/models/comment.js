"use strict";
var Comments = (function () {
    function Comments(id, name, detail, updated_at, user_id, showReply) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.updated_at = updated_at;
        this.user_id = user_id;
        this.showReply = showReply;
    }
    return Comments;
}());
exports.Comments = Comments;
