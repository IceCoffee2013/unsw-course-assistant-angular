/**
 * Created by langley on 6/8/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Experience} from 'app/models/experience/experience-model';

@Injectable()
export class ExperienceListService {
  public experienceListURL = 'mock-data/experience-list-mock.json';
  public experienceListSearchURL = 'mock-data/experience-list-search-mock.json';
  public delExperienceURL = "";
  constructor(public http: Http) { }

  public getExperienceList(searchText: string, page: number= 1): Observable<Experience[]>{
    let url = this.experienceListURL;
    let params = new URLSearchParams();
    if (searchText) {
      params.set('searchText',searchText);
      url = this.experienceListSearchURL;
      console.log(`searchText=${searchText}`);
    }
    params.set('page',String(page));

    return this.http
      .get(url,{search:params})
      .map((res:Response) => {
        let result = res.json();
        // console.log(result);
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  // TODO like
  public doLike() {

  }
  public addExperience(data: any): Observable<any> {
    return this.http.post(this.experienceListURL, data);
  }
  public search() {
  }
  public deleteExperience(experienceID: number):Observable<any> {
    return this.http.delete(this.delExperienceURL)
      .map((res: Response) => res.json());
  }
}
