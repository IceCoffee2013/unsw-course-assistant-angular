import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Comment} from "../../models/comment/comment-model";

@Injectable()
export class CommentService {
  public commentListURL = "mock-data/course-comment-mock.json";
  public addCommentURL = "";
  public delCommentURL = ""

  constructor(public http: Http) { }

  // public getCommentList(postId: number):Observable<Comment[]>{
  //   return this.http.get(this.commentListURL)
  //     .map((res: Response) => res.json())
  // }

  public addComment(data: any): Observable<any> {
    return this.http.post(this.addCommentURL, data);
  }

  public getComments(postId: string):Observable<Comment[]> {
      return this.http.get(this.commentListURL)
        .map((res: Response) => res.json())
  }

  public deleteComment(commentId: string):Observable<any> {
    return this.http.delete(this.delCommentURL)
      .map((res: Response) => res.json());
  }

}
