import {Component, OnInit} from "@angular/core";
import {ExperienceListService} from "../../../services/experience/experience-list.service";
import {Tag} from "../../../models/top-answer/tag-model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-write-post',
  templateUrl: './experience-publish.component.html',
  styleUrls: ['./experience-publish.component.scss'],
})

export class ExperiencePublishComponent implements OnInit {

  items = []
  autocompleteItems: string[] = ['comp', 'art', 'cse'];

  writeData = {
    title: '',
    content: '',
    tags: []
  }

  constructor(public experienceService: ExperienceListService, public router: Router) {

  }

  ngOnInit() {
  }


  onSubmit() {
    let tags: Tag[] = [];

    for (let item of this.items) {
      let t = new Tag();
      t.name = item.value;
      tags.push(t);
    }

    this.writeData.tags = tags;

    this.experienceService.addExperience(this.writeData).subscribe(
      data => {
        console.log("add experience success", data);
        this.router.navigateByUrl("experience");
      },
      err => {
        console.log("Error occured");
        this.router.navigateByUrl("experience");
      }
    );

  }

  onContentChanged() {
  }


  onSelectionChanged() {
  }

}
