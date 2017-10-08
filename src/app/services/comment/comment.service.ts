import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Comment} from "../../models/comment/comment-model";
import {CoreService} from "../core.service";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {Reply} from "../../models/comment/reply-model";

@Injectable()
export class CommentService {

  public baseURL = ""

  public commentListURL = "mock-data/course-comment-mock.json";
  public addCommentURL = "";
  public addReplyURL = "";
  public delCommentURL = "";
  public delReplyURL = "";

  constructor(private http: HttpClient, private coreService: CoreService) {

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
    if (type == "answer") {
      this.baseURL = type;
    }
    console.log("comment service type:", type);
  }

  public addComment(data: any, type: string): Observable<Comment> {
    const params = new HttpParams().set('type', type);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Comment>(this.coreService.baseUrl + "/api/comment",
      JSON.stringify(data), {params : params, headers : headers});
  }

  public getComments(postId: string, type: string):Observable<Comment[]> {
    const params = new HttpParams().set('type', type);
      return this.http.get<Comment[]>(this.coreService.baseUrl + "/api/comment/" + postId, {params});
  }

  public deleteComment(id: string):Observable<any> {
    return this.http.delete(this.coreService.baseUrl + "/api/comment/" + id);
  }

  public deleteReply(id: string): Observable<any> {
    return this.http.delete(this.coreService.baseUrl + "/api/comment/reply/" + id);
  }

  public addReply(data: any): Observable<Comment> {
    console.log("common id", data);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<Comment>(this.coreService.baseUrl + "/api/comment/reply",
      JSON.stringify(data), {headers});
  }

}
