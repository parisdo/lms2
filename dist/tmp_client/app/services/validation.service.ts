export class ValidationService {
  static getValidatorErrorMessage(validatorName: any, validatorValue?: any) {
    let config:any = {
      'required': 'กรุณากรอกข้อมูล',
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Email ไม่ถูกต้อง',
      'invalidPassword': 'รหัสผ่านไม่ถูกต้อง',
      'invalidNumber': 'กรอกตัวเลขเท่านั้น',
      'minlength': `กรอกตัวเลขอย่างน้อย ${validatorValue.requiredLength} หลัก`,
      'maxlength': `กรอกตัวเลขอย่างไม่เกิน ${validatorValue.requiredLength} หลัก`,
      'equalTo': `ยืนยันรหัสผ่านไม่ถูกต้อง`
    };

    return config[validatorName];
  }

  static creditCardValidator(control: any) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { 'invalidCreditCard': true };
    }
  }

  static emailValidator(control: any) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static passwordValidator(control: any) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }


  }

  static isNumber(control: any){

    if ( control.value != '' && !isNaN(control.value) ){
      return null
    }
    return {'invalidNumber': true };

  }

}


