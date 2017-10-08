import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Answer} from "../../models/top-answer/answer-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CoreService} from "../core.service";

@Injectable()
export class AnswerService {
  public answerListURL = 'mock-data/answer-list-mock.json';
  public answerLikeURL = 'mock-data/answer-list-mock.json'; // TODO

  constructor(public http: HttpClient, public coreService: CoreService) {
  }

  public getAnswerList(questionId: string): Observable<Answer[]> {
    return this.http
      .get<Answer[]>(this.coreService.baseUrl + "/api/answer/" + questionId);
  }

  public deleteAnswer(questionId: string): Observable<any> {
    return this.http
      .delete(this.coreService.baseUrl + "/api/answer/" + questionId);
  }

  public addAnswer(data: any): Observable<Answer> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http
      .post<Answer>(this.coreService.baseUrl + "/api/answer", JSON.stringify(data), {headers});
  }

  public doLike(answer: Answer) {

    return this.http.post(this.answerLikeURL, answer)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
