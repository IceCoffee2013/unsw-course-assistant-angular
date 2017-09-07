import {Tag} from "./tag-model";
import {Answer} from "./answer-model";

export class Question {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: Tag[] = [];
  postTime: Date;
}
