export class Post{
    constructor(
      public title:string,
      public body:string,
      public sender:string,
      public likes: number,
      public date:Date){}
  }