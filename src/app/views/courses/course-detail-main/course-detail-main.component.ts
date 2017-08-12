import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-detail-main',
  templateUrl: 'course-detail-main.component.html',
  styleUrls: ['course-detail-main.component.scss'],
})
export class CourseDetailMainComponent implements OnInit {

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    console.log("this is answer detail main.")
  }

}
