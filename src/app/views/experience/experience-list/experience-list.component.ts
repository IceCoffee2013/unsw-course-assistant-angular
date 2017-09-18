import {Component, NgModule, OnInit} from '@angular/core';
import {User} from "../../../models/user/user-model";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceListService} from "../../../services/experience/experience-list.service";
import {Experience} from "../../../models/experience/experience-model";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-experience-list',
  templateUrl: 'experience-list.component.html',
  styleUrls: ['experience-list.component.scss']
})


export class ExperienceListComponent implements OnInit {

  // tags
  public tags = [];
  public autoCompleteTags: string[] = ['cse', 'java', 'php', 'unsw'];
  public userName:String;
  // public maxSize: number = 12;
  public itemsPerPage: number = 12;
  public pageSizeOptions = [12, 15, 24];
  public totalItems: number;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;
  // public numPages

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public experienceList: Array<Experience>;




  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public experienceService: ExperienceListService) {

  }
  ngOnInit() {
    let user: User = JSON.parse(localStorage.getItem("currentUser"));
    // console.log('test1', user);
    if (user == null) {
      console.log("CommentComponent: not log in");
      this.userName = "";
    } else {
      console.log(user.userName);
      this.userName = user.userName;
    }
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.loadData(this.searchText, this.currentPage);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.loadData(this.searchText, this.currentPage)
      });

  }
  public loadData(searchText: string, page: number) {
    let offset = (this.currentPage - 1) * this.itemsPerPage;
    let end = (this.currentPage) * this.itemsPerPage;

    return this.experienceService.getExperienceList(searchText, page).subscribe(
      res => {
        this.totalItems = res.length;
        //TODO.正式环境中，需要去掉slice
        this.experienceList = res.slice(offset, end > this.totalItems ? this.totalItems : end);
      },
      error => {
        console.log(error)
      },
      () => {
      }
    );
  }
  onLike(experience:Experience){
    experience.liked = !experience.liked;
  }

  onAdd(item) {
  }

}

