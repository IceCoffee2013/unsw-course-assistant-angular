import {User} from "../user/user-model";

export class Article {
  slug: string;
  title = '';
  description = '';
  body = '';
  tagList: Array<string> = [];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: User;
}
