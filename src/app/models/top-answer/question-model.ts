import {Tag} from "./tag-model";

export class Question {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: Tag[] = [];
  postTime: Date;
}
