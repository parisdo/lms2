class MessageService {

  getSeverity(status : any){
    const success: string = 'success';
    const error: string = 'error';
    let msg: any;
    status == 200 ? msg = success : msg = error;
    return msg;
  }


  getUpdateStudentsScoreMessage(status : any){

    const success: any = {
      summary: 'Updated Success', detail: 'Updated students score success'
    };

    const error: any = {
      summary: 'Updated Failed', detail: 'Updated students score failed'
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
      summary: 'Login Success', detail: 'Welcome back to marketplace'
    };

    const error: any = {
      summary: 'Login Failed', detail: 'Your email or password does not match'
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

  getRegisterMessage(status : any){

    const success: any = {
      summary: 'Registration Success', detail: 'Please check your email for a link to complete your registration'
    };

    const error: any = {
      summary: 'Registration Failed', detail: 'The email has already been taken'
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

  getVendorAddListingMessage(status : any){

    const success: any = {
      summary: 'Added Listing Success', detail: 'Successfully added new listing'
    };

    const error: any = {
      summary: 'Added Listing Failed', detail: 'Cannot added new listing'
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

  getVendorEditListingMessage(status : any){

    const success: any = {
      summary: 'Edited Listing Success', detail: 'Successfully edited listing'
    };

    const error: any = {
      summary: 'Edited Listing Failed', detail: 'Cannot edited listing'
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

  getVendorEditStatusMessage(status : any){

    const success: any = {
      summary: 'Updated Status Success', detail: 'our listing has been sent to a Moderator for review. We will review your listing as soon as possible.'
    };

    const error: any = {
      summary: 'Updated Status Failed', detail: 'Cannot updated status listing'
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

  getVendorDeleteStatusMessage(status : any){

    const success: any = {
      summary: 'Deleted Listing Success', detail: 'Listing deleted.'
    };

    const error: any = {
      summary: 'Deleted Listing Failed', detail: 'Cannot deleted listing'
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
