import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Experience} from "../../../models/experience/experience-model";
import {ExperienceListService} from "../../../services/experience/experience-list.service";

@Component({
  selector: 'app-admin-experience-list',
  templateUrl: './admin-experience-list.component.html',
  styleUrls: ['./admin-experience-list.component.scss']
})
export class AdminExperienceListComponent implements OnInit {

  public tags = [];
  show: boolean = false;
  public itemsPerPage: number = 12;
  public pageSizeOptions = [12, 15, 24];
  public totalItems: number;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;
  // public numPages
  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();
  public experienceList: Array<Experience>;
  public totalExperienceList: Array<Experience>;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public experienceListService: ExperienceListService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.currentPage = params['page'];
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

    return this.experienceListService.getExperienceList(searchText, page).subscribe(
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

  selectedExperience: Experience;

  onSelect(exp: Experience): void {
    this.selectedExperience = exp;
  }

  public loadDataByPage(page: number) {
    if (!this.totalExperienceList) {
      this.loadData("", page);
      return;
    }

    let offset = (this.currentPage - 1) * this.itemsPerPage;
    let end = (this.currentPage) * this.itemsPerPage;

    if (this.tags && this.tags.length > 0) {
      let filterQuestion = Array<Experience>();

      this.totalItems = filterQuestion.length;
      this.experienceList = filterQuestion.slice(offset, end > this.totalItems ? this.totalItems : end);
      console.log("filter size:", filterQuestion.length);
      return;
    }

    this.totalItems = this.totalExperienceList.length;
    this.experienceList = this.totalExperienceList.slice(offset, end > this.totalItems ? this.totalItems : end);
  }


  public deleteExperience(experience: Experience): void {
    // this.experienceList.forEach(
    //   (value, index) => {
    //     if (value.id === experience.id) {
    //       console.log('Index', index);
    //       this.experienceList.splice(index, 1);
    //     }
    //   }
    // );
    // server delete
    this.experienceListService.deleteExperience(experience.id).subscribe(
      data => {
        console.log("delete success", data);
        this.loadData(this.searchText, this.currentPage);
      },
      err => {
        console.log("delete err", err);
      }
    );
    this.selectedExperience = null;
  }
  public pageChanged(event: any): void {
    let pageNumber = event.pageIndex + 1;
    console.log("event page: " + pageNumber);
    this.router.navigateByUrl("admin/course/page/" + pageNumber);
  }
}
