import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Question} from "../../models/top-answer/question-model";

@Injectable()
export class QuestionService {
  public questionURL = 'mock-data/question-mock.json';
  public questionListURL = 'mock-data/question-list-mock.json';
  public questionListSearchURL = 'mock-data/question-list-search-mock.json';

  constructor(public http: Http) {
  }

  public getQuestion(id: string): Observable<Question> {
    let params = new URLSearchParams();
    params.set('id', id);
    return this.http
      .get(this.questionURL, {search:params})
      .map((res: Response) => res.json());
  }

  public getQuestionList(searchText: string, page: number=1): Observable<Question[]> {
    let url = this.questionListURL;
    let params = new URLSearchParams();
    if (searchText) {
      params.set('searchText',searchText);
      url = this.questionListSearchURL;
      console.log(`searchText=${searchText}`);
    }
    params.set('page',String(page));

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

  public search() {

  }

}
