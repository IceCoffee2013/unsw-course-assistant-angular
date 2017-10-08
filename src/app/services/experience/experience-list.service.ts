/**
 * Created by langley on 6/8/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Experience} from "app/models/experience/experience-model";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {CoreService} from "../core.service";

@Injectable()
export class ExperienceListService {
  public experienceListURL = 'mock-data/experience-list-mock.json';
  public experienceListSearchURL = 'mock-data/experience-list-search-mock.json';

  constructor(public http: HttpClient, public coreService: CoreService) {
  }

  public getExperienceList(searchText: string, page: number = 1): Observable<Experience[]> {
    let options = {};
    if (searchText) {
      const params: HttpParams = new HttpParams().set('searchText', searchText);
      options = {params: params};
      console.log(`set searchText = ${searchText}`, params);
    }

    return this.http.get<Experience[]>(this.coreService.baseUrl + "/api/article", options);
  }

  // TODO like
  public doLike() {

  }

  public getExperience(id: string): Observable<Experience> {
    const params = new HttpParams().set('id', id);
    return this.http
      .get<Experience>(this.coreService.baseUrl + "/api/article/" + id);
  }

  public addExperience(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return this.http.post<Experience>(this.coreService.baseUrl + "/api/article", JSON.stringify(data), {headers});
  }

  public search() {
  }

  public deleteExperience(id: string): Observable<any> {
    return this.http.delete(this.coreService.baseUrl + "/api/article/" + id);
  }
}
