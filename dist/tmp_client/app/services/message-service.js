"use strict";
var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.getSeverity = function (status) {
        var success = 'success';
        var error = 'error';
        var msg;
        status == 200 ? msg = success : msg = error;
        return msg;
    };
    MessageService.prototype.getUpdateMessage = function (status) {
        var success = {
            summary: 'สำเร็จ', detail: 'บันทึกการแก้ไขข้อมูล'
        };
        var error = {
            summary: 'ผิดพลาด', detail: 'มีข้อผิดพลาดไม่สามารถแก้ไขข้อมูลได้'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    MessageService.prototype.getLoginMessage = function (status) {
        var success = {
            summary: 'สำเร็จ', detail: 'ยินดีต้อนรับกลับมา'
        };
        var error = {
            summary: 'ผิดพลาด', detail: 'อีเมลล์หรือรหัสผ่านไม่ถูกต้อง'
        };
        var summary;
        var detail;
        if (status == 200) {
            summary = success.summary;
            detail = success.detail;
        }
        else {
            summary = error.summary;
            detail = error.detail;
        }
        return { severity: this.getSeverity(status), summary: summary, detail: detail };
    };
    return MessageService;
}());
exports.msg = new MessageService();
