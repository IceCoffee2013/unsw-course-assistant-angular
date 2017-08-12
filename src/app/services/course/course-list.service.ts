/**
 * Created by langley on 6/8/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Course} from "../../models/course/course-model";

@Injectable()
export class CourseListService {
  public courseListURL = 'mock-data/course-list-mock.json';
  public courseListSearchURL = 'mock-data/course-list-search-mock.json';

  constructor(public http:Http) { }

  public getCourseList(searchText: string,page:number=1):Observable<Course[]>{
    let url = this.courseListURL;
    let params = new URLSearchParams();
    if (searchText) {
      params.set('searchText',searchText);
      url = this.courseListSearchURL;
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

  public addCourse(user:any){

  }

  public search() {

  }
}
