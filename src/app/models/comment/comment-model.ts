import {Reply} from "./reply-model";

export class Comment {
  id: string;
  postId: string;
  content: string;
  postTime: Date;
  commenter: string;
  avatar: string;
  replies: Reply[] = [];
}
