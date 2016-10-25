"use strict";
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Invalid credit card number',
            'invalidEmailAddress': 'Invalid Email Address',
            'invalidPassword': 'Invalid Password',
            'invalidNumber': 'Invalid Number',
            'minlength': "Minimum " + validatorValue.requiredLength + " length",
            'maxlength': "Maximum " + validatorValue.requiredLength + " length",
            'equalTo': "Not equal to"
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
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
    ValidationService.youtubeParser = function (url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBQUE7SUE4REEsQ0FBQztJQTdEUSwwQ0FBd0IsR0FBL0IsVUFBZ0MsYUFBa0IsRUFBRSxjQUFvQjtRQUN0RSxJQUFJLE1BQU0sR0FBRztZQUNYLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLG1CQUFtQixFQUFFLDRCQUE0QjtZQUNqRCxxQkFBcUIsRUFBRSx1QkFBdUI7WUFDOUMsaUJBQWlCLEVBQUUsa0JBQWtCO1lBQ3JDLGVBQWUsRUFBRSxnQkFBZ0I7WUFDakMsV0FBVyxFQUFFLGFBQVcsY0FBYyxDQUFDLGNBQWMsWUFBUztZQUM5RCxXQUFXLEVBQUUsYUFBVyxjQUFjLENBQUMsY0FBYyxZQUFTO1lBQzlELFNBQVMsRUFBRSxjQUFjO1NBQzFCLENBQUM7UUFFRixNQUFNLENBQU8sTUFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxxQ0FBbUIsR0FBMUIsVUFBMkIsT0FBWTtRQUVyQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyx1SkFBdUosQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqTCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFTSxnQ0FBYyxHQUFyQixVQUFzQixPQUFZO1FBRWhDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHVJQUF1SSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pLLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVNLG1DQUFpQixHQUF4QixVQUF5QixPQUFZO1FBR25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0lBR0gsQ0FBQztJQUVNLDBCQUFRLEdBQWYsVUFBZ0IsT0FBWTtRQUUxQixFQUFFLENBQUMsQ0FBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDYixDQUFDO1FBQ0QsTUFBTSxDQUFDLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO0lBRWxDLENBQUM7SUFFTSwrQkFBYSxHQUFwQixVQUFxQixHQUFPO1FBQzFCLElBQUksTUFBTSxHQUFHLDZFQUE2RSxDQUFDO1FBQzNGLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM3RCxDQUFDO0lBR0gsd0JBQUM7QUFBRCxDQTlEQSxBQThEQyxJQUFBO0FBOURZLHlCQUFpQixvQkE4RDdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC92YWxpZGF0aW9uL3ZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcbiAgc3RhdGljIGdldFZhbGlkYXRvckVycm9yTWVzc2FnZSh2YWxpZGF0b3JOYW1lOiBhbnksIHZhbGlkYXRvclZhbHVlPzogYW55KSB7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCcsXG4gICAgICAnaW52YWxpZENyZWRpdENhcmQnOiAnSW52YWxpZCBjcmVkaXQgY2FyZCBudW1iZXInLFxuICAgICAgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiAnSW52YWxpZCBFbWFpbCBBZGRyZXNzJyxcbiAgICAgICdpbnZhbGlkUGFzc3dvcmQnOiAnSW52YWxpZCBQYXNzd29yZCcsXG4gICAgICAnaW52YWxpZE51bWJlcic6ICdJbnZhbGlkIE51bWJlcicsXG4gICAgICAnbWlubGVuZ3RoJzogYE1pbmltdW0gJHt2YWxpZGF0b3JWYWx1ZS5yZXF1aXJlZExlbmd0aH0gbGVuZ3RoYCxcbiAgICAgICdtYXhsZW5ndGgnOiBgTWF4aW11bSAke3ZhbGlkYXRvclZhbHVlLnJlcXVpcmVkTGVuZ3RofSBsZW5ndGhgLFxuICAgICAgJ2VxdWFsVG8nOiBgTm90IGVxdWFsIHRvYFxuICAgIH07XG5cbiAgICByZXR1cm4gKDxhbnk+Y29uZmlnKVt2YWxpZGF0b3JOYW1lXTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVkaXRDYXJkVmFsaWRhdG9yKGNvbnRyb2w6IGFueSkge1xuICAgIC8vIFZpc2EsIE1hc3RlckNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIERpbmVycyBDbHViLCBEaXNjb3ZlciwgSkNCXG4gICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KSQvKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7ICdpbnZhbGlkQ3JlZGl0Q2FyZCc6IHRydWUgfTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZW1haWxWYWxpZGF0b3IoY29udHJvbDogYW55KSB7XG4gICAgLy8gUkZDIDI4MjIgY29tcGxpYW50IHJlZ2V4XG4gICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL1thLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy8pKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiB0cnVlIH07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IGFueSkge1xuICAgIC8vIHs2LDEwMH0gICAgICAgICAgIC0gQXNzZXJ0IHBhc3N3b3JkIGlzIGJldHdlZW4gNiBhbmQgMTAwIGNoYXJhY3RlcnNcbiAgICAvLyAoPz0uKlswLTldKSAgICAgICAtIEFzc2VydCBhIHN0cmluZyBoYXMgYXQgbGVhc3Qgb25lIG51bWJlclxuICAgIGlmIChjb250cm9sLnZhbHVlLm1hdGNoKC9eKD89LipbQS1aYS16XSkoPz0uKlxcZClbQS1aYS16XFxkXXs4LH0kLykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyAnaW52YWxpZFBhc3N3b3JkJzogdHJ1ZSB9O1xuICAgIH1cblxuXG4gIH1cblxuICBzdGF0aWMgaXNOdW1iZXIoY29udHJvbDogYW55KXtcblxuICAgIGlmICggY29udHJvbC52YWx1ZSAhPSAnJyAmJiAhaXNOYU4oY29udHJvbC52YWx1ZSkgKXtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiB7J2ludmFsaWROdW1iZXInOiB0cnVlIH07XG5cbiAgfVxuXG4gIHN0YXRpYyB5b3V0dWJlUGFyc2VyKHVybDphbnkpIHtcbiAgICB2YXIgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteI1xcJlxcP10qKS4qLztcbiAgICB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoWzddLmxlbmd0aCA9PSAxMSkgPyBtYXRjaFs3XSA6IGZhbHNlO1xuICB9XG5cblxufVxuXG5cbiJdfQ==
