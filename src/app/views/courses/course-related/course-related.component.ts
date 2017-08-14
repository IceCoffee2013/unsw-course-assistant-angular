import {Component, OnInit} from "@angular/core";
import {Course} from "../../../models/course/course-model";
import {ActivatedRoute} from "@angular/router";
import {CourseListService} from "app/services/course/course-list.service";

@Component({
  selector: 'app-course-relatity',
  templateUrl: 'course-related.component.html',
  styleUrls: ['course-related.component.scss']
})

export class CourseRelatityComponent implements OnInit {
  public course: Array<Course>;

  constructor(public courseListService: CourseListService,
              public activeRoute: ActivatedRoute) {
    console.log(this.courseListService);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getrelatityCourse(params["tag"])
    );
  }
  public getrelatityCourse(tag: string) {
    this.courseListService
      .getCourseList(tag)
      .subscribe(
        data => this.course = data,
        error => console.error(error)
      );
  }
}
