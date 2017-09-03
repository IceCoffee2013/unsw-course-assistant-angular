import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Comment} from "../../models/comment/comment-model";

@Injectable()
export class CommentService {

  public baseURL = ""

  public commentListURL = "mock-data/course-comment-mock.json";
  public addCommentURL = "";
  public addReplyURL = "";
  public delCommentURL = "";
  public delReplyURL = "";

  constructor(public http: Http) {

  }

  public setCommentType(type: string) {
    if (type == "course") {
      this.baseURL = type;
    }
    if (type == "question") {
      this.baseURL = type;
    }
    if (type == "experience") {
      this.baseURL = type;
    }
    console.log("comment service type:", type);
  }

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

  public deleteReply(commentId: string, replyID: string): Observable<any> {
    return this.http.delete(this.delReplyURL)
      .map((res: Response) => res.json());
  }

  public addRelpy(data: any): Observable<any> {
    return this.http.post(this.addReplyURL, data);
  }

}
