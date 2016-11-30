class MessageService {

  getSeverity(status : any){
    const success: string = 'success';
    const error: string = 'error';
    let msg: any;
    status == 200 ? msg = success : msg = error;
    return msg;
  }


  getUpdateMessage(status : any){

    const success: any = {
      summary: 'สำเร็จ', detail: 'บันทึกการแก้ไขข้อมูล'
    };

    const error: any = {
      summary: 'ผิดพลาด', detail: 'มีข้อผิดพลาดไม่สามารถแก้ไขข้อมูลได้'
    };

    let summary: any;
    let detail: any;

    if(status == 200){
      summary = success.summary;
      detail = success.detail;
    }else {
      summary = error.summary;
      detail = error.detail;
    }

    return {severity: this.getSeverity(status), summary:summary, detail:detail}
  }

  getLoginMessage(status : any){

    const success: any = {
      summary: 'สำเร็จ', detail: 'ยินดีต้อนรับกลับมา'
    };

    const error: any = {
      summary: 'ผิดพลาด', detail: 'อีเมลล์หรือรหัสผ่านไม่ถูกต้อง'
    };

    let summary: any;
    let detail: any;

    if(status == 200){
      summary = success.summary;
      detail = success.detail;
    }else {
      summary = error.summary;
      detail = error.detail;
    }

    return {severity: this.getSeverity(status), summary:summary, detail:detail}
  }





}

export const msg = new MessageService();
