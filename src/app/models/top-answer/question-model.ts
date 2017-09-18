import {Tag} from "./tag-model";

export class Question {
  id: string;
  title: string;
  description: string;
  author: string;
  liked: boolean = false;
  tags: Tag[] = [];
  postTime: Date;
}
