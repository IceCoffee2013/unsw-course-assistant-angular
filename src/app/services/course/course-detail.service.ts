import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Course} from "../../models/course/course-model";


@Injectable()
export class CourseDetailService {
  public courseDetailURL = "http://localhost:8080/api/course";
  constructor(public http: Http) {
  }

  /**
   * @Deprecated
   * @param id
   * @returns {Observable<R>}
   */
  public getCourse(id: string): Observable<Course> {
    return this.http
      .get(this.courseDetailURL + "/" + id)
      .map((res: Response) => res.json());
  }

}
