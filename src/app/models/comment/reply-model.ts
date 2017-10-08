/**
 * Created by langley on 30/8/17.
 */
export class Reply {

  id: string;
  commentId: string;
  replyContent: string;
  replier: string;
  toWho: string;
  replyTime: Date;
  isShow: boolean = false; // using toWho fold reply dialog
}
