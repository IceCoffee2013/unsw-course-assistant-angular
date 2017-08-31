import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../../models/course/course-model";
import {CourseDetailService} from "../../../services/course/course-detail.service";


@Component({
  selector: 'app-course-detail',
  templateUrl: 'course-detail.component.html',
  styleUrls: ['course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  public commentType: string = "course";
  public course: Course = new Course();

  constructor(public courseDetailService: CourseDetailService,
              public activeRoute: ActivatedRoute) {
    console.log(this.courseDetailService);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCourse(params["id"])
    );
  }

  public getCourse(id: number) {
    this.courseDetailService
      .getCourse(id)
      .subscribe(
        data => this.course = data,
        error => console.error(error)
      );
  }
}
