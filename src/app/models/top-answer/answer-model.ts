export class Answer {
  id: string;
  questionId: string;
  author: string;
  avatar: string;
  content: string;
  postTime: Date;
  likes: number = 0;
  isUp: boolean = false;    // vote
  isDown: boolean = false;
  isShowComment = false;
}
