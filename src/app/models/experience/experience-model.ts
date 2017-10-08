import {Tag} from "../top-answer/tag-model";
export class Experience {
  id: string
  title: string
  author: string
  content: string
  postTime: Date
  tags: Tag[] = [];
  liked: boolean = false;

}

