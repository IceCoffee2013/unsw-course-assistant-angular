import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user/user-model";
import {ActivatedRoute, Router} from "@angular/router";
import {Experience} from "../../../models/experience/experience-model";
import {Subject} from "rxjs/Subject";
import {ExperienceListService} from "../../../services/experience/experience-list.service";

@Component({
  selector: 'app-experience-list',
  templateUrl: 'experience-list.component.html',
  styleUrls: ['experience-list.component.scss']
})


export class ExperienceListComponent implements OnInit {

  // tags
  public tags = [];
  public autoCompleteTags: string[] = ['cse', 'java', 'php', 'unsw'];
  public userName: String;
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
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.currentPage = params['page'];
      this.loadData(this.searchText, this.currentPage);
    });

    // this.searchTextStream
    //   .debounceTime(500)
    //   .distinctUntilChanged()
    //   .subscribe(searchText => {
    //     console.log(this.searchText);
    //     this.loadData(this.searchText, this.currentPage)
    //   });

  }

  public loadData(searchText: string, page: number) {
    let offset = (this.currentPage - 1) * this.itemsPerPage;
    let end = (this.currentPage) * this.itemsPerPage;

    return this.experienceService.getExperienceList(searchText, page).subscribe(
      res => {
        this.totalItems = res.length;
        console.log("ex", res);
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

  public onLike(experience: Experience) {
    experience.liked = !experience.liked;
  }

  public onAdd(item) {
    console.log('tag added: value is ' + item.value);
    this.searchText = item.value.toLowerCase();
    this.loadData(this.searchText, 1);
  }

  public onRemove(item) {
    console.log('tag remove: value is ' + item.value);
    this.searchText = null;
    this.loadData(null, 1);
  }

  public goToPublish() {
    let user: User = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      this.router.navigateByUrl("experience/publish");
    } else {
      this.router.navigateByUrl("sessions/signin");
    }
  }

  public pageChanged(event: any): void {
    let pageNumber = event.pageIndex + 1;
    console.log("event page: " + pageNumber);
    this.router.navigateByUrl("experience/page/" + pageNumber);
  }

}

