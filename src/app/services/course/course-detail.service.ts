import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Course} from "../../models/course/course-model";


@Injectable()
export class CourseDetailService {
  public courseDetailURL = "mock-data/course-mock.json";
  constructor(public http: Http) {
  }

  public getCourse(id: string): Observable<Course> {
    return this.http
      .get(this.courseDetailURL)
      .map((res: Response) => res.json());
  }

}
