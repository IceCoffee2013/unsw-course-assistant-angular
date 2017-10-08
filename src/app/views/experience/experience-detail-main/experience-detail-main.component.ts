import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExperienceListService} from "../../../services/experience/experience-list.service";
import {Experience} from "../../../models/experience/experience-model";


@Component({
  selector: 'app-experience-detail-main',
  templateUrl: 'experience-detail-main.component.html',
  styleUrls: ['experience-detail-main.component.scss']
})

export class ExperienceDetailMainComponent implements OnInit {

  public commentType: string = "experience";
  public experience: Experience = new Experience();

  constructor(public activeRoute: ActivatedRoute, public experienceService: ExperienceListService) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        let id: string = params["id"];
        this.loadArticle(id);
      }
    );
  }

  public loadArticle(id: string) {
    this.experienceService.getExperience(id)
      .subscribe(
        data => {
          this.experience = data;
          console.log("load experience", data);
        },
        error => {
          console.error(error);
        }
      );
  }


}

