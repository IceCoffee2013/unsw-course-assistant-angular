import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-detail-main',
  templateUrl: 'top-answer-detail-main.component.html',
  styleUrls: ['top-answer-detail-main.component.scss'],
})
export class TopAnswerDetailMainComponent implements OnInit {

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    console.log("this is answer detail main.")
  }

}
