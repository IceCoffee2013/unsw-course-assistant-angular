import {Component, NgModule, OnInit} from '@angular/core';


@Component({
  selector: 'app-top-answer',
  templateUrl: 'top-answer-list.component.html',
  styleUrls: ['top-answer-list.component.scss']
})

export class TopAnswerListComponent implements OnInit {
  show: boolean = false;

  ngOnInit() {
  }

  showask() {
    this.show = !this.show;
  }
}
