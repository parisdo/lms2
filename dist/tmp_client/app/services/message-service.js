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
    MessageService.prototype.getUpdateStudentsScoreMessage = function (status) {
        var success = {
            summary: 'Updated Success', detail: 'Updated students score success'
        };
        var error = {
            summary: 'Updated Failed', detail: 'Updated students score failed'
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
            summary: 'Login Success', detail: 'Welcome back to marketplace'
        };
        var error = {
            summary: 'Login Failed', detail: 'Your email or password does not match'
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
    MessageService.prototype.getRegisterMessage = function (status) {
        var success = {
            summary: 'Registration Success', detail: 'Please check your email for a link to complete your registration'
        };
        var error = {
            summary: 'Registration Failed', detail: 'The email has already been taken'
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
    MessageService.prototype.getVendorAddListingMessage = function (status) {
        var success = {
            summary: 'Added Listing Success', detail: 'Successfully added new listing'
        };
        var error = {
            summary: 'Added Listing Failed', detail: 'Cannot added new listing'
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
    MessageService.prototype.getVendorEditListingMessage = function (status) {
        var success = {
            summary: 'Edited Listing Success', detail: 'Successfully edited listing'
        };
        var error = {
            summary: 'Edited Listing Failed', detail: 'Cannot edited listing'
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
    MessageService.prototype.getVendorEditStatusMessage = function (status) {
        var success = {
            summary: 'Updated Status Success', detail: 'our listing has been sent to a Moderator for review. We will review your listing as soon as possible.'
        };
        var error = {
            summary: 'Updated Status Failed', detail: 'Cannot updated status listing'
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
    MessageService.prototype.getVendorDeleteStatusMessage = function (status) {
        var success = {
            summary: 'Deleted Listing Success', detail: 'Listing deleted.'
        };
        var error = {
            summary: 'Deleted Listing Failed', detail: 'Cannot deleted listing'
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
