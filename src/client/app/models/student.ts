export class Student {
  constructor(
    public student_id?: string,
    public title?: string,
    public name?: string,
    public image?: string,
    public overall_xp?: number,
    public level?: number,
    public course_id?: number,
    public username?: string,
    public password?: string,
    public id?: any,
    public selected? : boolean,
    public progressType?: any,
    public maxXP?: any,
    public badges?: any[]

  ) {}
}
