"use strict";
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'กรุณากรอกข้อมูล',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Email ไม่ถูกต้อง',
            'invalidPassword': 'รหัสผ่านไม่ถูกต้อง',
            'invalidNumber': 'กรอกตัวเลขเท่านั้น',
            'minlength': "\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 " + validatorValue.requiredLength + " \u0E2B\u0E25\u0E31\u0E01",
            'maxlength': "\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 " + validatorValue.requiredLength + " \u0E2B\u0E25\u0E31\u0E01",
            'equalTo': "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.isNumber = function (control) {
        if (control.value != '' && !isNaN(control.value)) {
            return null;
        }
        return { 'invalidNumber': true };
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
