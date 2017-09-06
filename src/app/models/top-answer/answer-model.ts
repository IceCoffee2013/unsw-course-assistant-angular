export class Answer {
  id: string;
  questionId: string;
  author: string;
  content: string;
  postTime: Date;
  likes: number;
  liked: boolean = false;
}
