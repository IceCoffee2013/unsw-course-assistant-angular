export class Answer {
  id: string;
  questionId: string;
  author: string;
  avatar: string;
  content: string;
  postTime: Date;
  likes: number;
  isUp: boolean = false;    // vote
  isDown: boolean = false;
  isShowComment = false;
}
