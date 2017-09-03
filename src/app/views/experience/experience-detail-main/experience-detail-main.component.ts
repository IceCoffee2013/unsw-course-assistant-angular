import {Component, NgModule, OnInit} from '@angular/core';


@Component({
  selector: 'app-experience-detail-main',
  templateUrl: 'experience-detail-main.component.html',
  styleUrls: ['experience-detail-main.component.scss']
})

export class ExperienceDetailMainComponent implements OnInit {

  public commentType: string = "experience";

  ngOnInit() {
  }
}

