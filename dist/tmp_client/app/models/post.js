"use strict";
var Post = (function () {
    function Post(id, title, detail, updated_at) {
        this.id = id;
        this.title = title;
        this.detail = detail;
        this.updated_at = updated_at;
    }
    return Post;
}());
exports.Post = Post;
