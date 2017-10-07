/**
 * Created by langley on 6/8/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Course} from "../../models/course/course-model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {CoreService} from "../core.service";

@Injectable()
export class CourseListService {
  // public courseListURL = 'mock-data/course-list-mock.json';
  public courseListURL = 'http://localhost:8080/api/course';
  public courseListSearchURL = 'mock-data/course-list-search-mock.json';
  public deleteCourseURL = '';

  constructor(public http: HttpClient, public coreService: CoreService) {
  }

  public getCourseList(searchText: string, page: number = 1): Observable<Course[]> {

    const params = new HttpParams()
      .set('page', String(page));

    // if (searchText) {
    //   params.set('searchText', searchText);
    //   url = this.courseListSearchURL;
    //   console.log(`searchText=${searchText}`);
    // }
    // params.set('page', String(page));

    return this.http.get<Course[]>(this.coreService.baseUrl + "/api/course", {params});
    // .map((res: Response) => {
    //   let result = res.json();
    //   // console.log(result);
    //   return result;
    // })
    // .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  // TODO like
  public doLike() {

  }

  public addCourse(data: any): Observable<any> {
    return this.http.post(this.courseListURL, data);
  }

  public deleteCourse(courseID: string): Observable<any> {
    return this.http.delete(this.deleteCourseURL)
      .map((res: Response) => res.json());
  }

  public getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(
      this.coreService.baseUrl + "/api/course/"  + id);
  }

  public getRelatedCourses(id: string): Observable<Course[]> {
    return this.http.get<Course[]>(
      this.coreService.baseUrl + "/api/course/related/" + id
    );
  }

}
