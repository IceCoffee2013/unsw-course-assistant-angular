import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Question} from "../../models/top-answer/question-model";
import {Answer} from "../../models/top-answer/answer-model";

@Injectable()
export class AnswerService {
  public answerListURL = 'mock-data/answer-list-mock.json';

  constructor(public http: Http) {
  }

  public getAnswerList(questionId: string): Observable<Answer[]> {
    let url = this.answerListURL;
    let params = new URLSearchParams();
    params.set('questionId', questionId);

    return this.http
      .get(url,{search:params})
      .map((res:Response) => {
        let result=res.json();
        // console.log(result);
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  // TODO like
  public doLike() {

  }

}
