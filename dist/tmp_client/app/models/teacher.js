"use strict";
var Teacher = (function () {
    function Teacher(email, password, name, image, title, position, id_card, phone, address, teaching_level, institution, province) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.image = image;
        this.title = title;
        this.position = position;
        this.id_card = id_card;
        this.phone = phone;
        this.address = address;
        this.teaching_level = teaching_level;
        this.institution = institution;
        this.province = province;
    }
    return Teacher;
}());
exports.Teacher = Teacher;
