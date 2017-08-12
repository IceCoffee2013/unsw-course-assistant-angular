import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {Course} from "../../../models/course/course-model";
import {CourseListService} from "../../../services/course/course-list.service";
import {number} from "ng2-validation/dist/number";

@Component({
  selector: 'app-course-list',
  templateUrl: 'course-list.component.html',
  styleUrls: ['course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  // public maxSize: number = 12;
  public itemsPerPage: number = 12;
  public pageSizeOptions = [12, 15, 24];
  public totalItems: number;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;
  // public numPages

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public courseList: Array<Course>;


  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public courseService: CourseListService) {

  }

  ngOnInit() {
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

    return this.courseService.getCourseList(searchText, page).subscribe(
      res => {
        this.totalItems = res.length;
        //TODO.正式环境中，需要去掉slice
        this.courseList = res.slice(offset, end > this.totalItems ? this.totalItems : end);
      },
      error => {
        console.log(error)
      },
      () => {
      }
    );
  }

  public pageChanged(event: any): void {
    let pageNumber = event.pageIndex + 1;
    console.log("event page: " + pageNumber);
    this.router.navigateByUrl("course/page/" + pageNumber);
  }

  public searchChanged($event): void {
    console.log(this.searchText);
    this.searchTextStream.next(this.searchText);
  }

  public doDetail(courseID: string): void {
    console.log("do detail: " + courseID);
    this.router.navigateByUrl("course/detail/" + courseID);
  }

  // public gotoWrite(): void {
  //   //TODO：如果没有登录，跳转到登录页，如果已登录，跳往写作页
  //   // console.log("user/write")
  //   this.router.navigateByUrl("user/write");
  // }
}
