import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Question} from "../../models/top-answer/question-model";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {CoreService} from "../core.service";

@Injectable()
export class QuestionService {
  public questionURL = 'mock-data/question-mock.json';
  public questionListURL = 'mock-data/question-list-mock.json';
  public questionListSearchURL = 'mock-data/question-list-search-mock.json';

  constructor(public http: HttpClient, public coreService: CoreService) {
  }

  public getQuestion(id: string): Observable<Question> {
    const params = new HttpParams().set('id', id);
    return this.http
      .get<Question>(this.coreService.baseUrl + "/api/question/" + id);
  }

  public getQuestionList(searchText: string, page: number = 1): Observable<Question[]> {
    let options = {};
    if (searchText) {
      const params: HttpParams = new HttpParams().set('searchText', searchText);
      options = {params: params};
      console.log(`set searchText = ${searchText}`, params);
    }

    return this.http.get<Question[]>(this.coreService.baseUrl + "/api/question", options);
  }

  public addQuestion(data: any): Observable<Question> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post<Question>(this.coreService.baseUrl + "/api/question", JSON.stringify(data), {headers});
  }

  // TODO like
  public doLike() {

  }

  public search() {

  }

  public deleteQuestion(id: string): Observable<any> {
    return this.http.delete(this.coreService.baseUrl + "/api/question/" + id);
  }
}
