import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {Course} from "../../../models/course/course-model";
import {CourseListService} from "../../../services/course/course-list.service";

@Component({
  selector: 'app-course-list',
  templateUrl: 'course-list.component.html',
  styleUrls: ['course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  // tags
  public tags = [];
  public autoCompleteTags: string[] = ['cse', 'java', 'php', 'unsw'];

  // public maxSize: number = 12;
  public itemsPerPage: number = 12;
  public pageSizeOptions = [12, 15, 24];
  public totalItems: number;

  public currentPage: number = 1;

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public courseList: Array<Course>;
  public totalCourseList: Array<Course>;


  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public courseService: CourseListService) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // console.log(params);
      this.currentPage = params["page"];
      if (this.totalCourseList && this.totalCourseList.length > 0) {
        console.log("loadDataByPage", this.currentPage);
        this.loadDataByPage(this.currentPage);
      } else {
        this.loadData(this.searchText, this.currentPage);
        console.log("loadData", this.currentPage);
      }

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

    console.log(offset, end, this.currentPage);

    return this.courseService.getCourseList(searchText, page).subscribe(
      res => {
        this.totalItems = res.length;
        //TODO 正式环境中，需要去掉slice
        this.totalCourseList = res;
        this.courseList = res.slice(offset, end > this.totalItems ? this.totalItems : end);
      },
      error => {
        console.log(error)
      },
      () => {
      }
    );
  }

  /**
   * using for tag search.
   * @param page
   */
  public loadDataByPage(page: number) {
    if (!this.totalCourseList) {
      this.loadData("", page);
      return;
    }

    let offset = (this.currentPage - 1) * this.itemsPerPage;
    let end = (this.currentPage) * this.itemsPerPage;

    if (this.tags && this.tags.length > 0) {
      let filterCourse = Array<Course>();

      for (let course of this.totalCourseList) {
        let flag: boolean = true;

        for (let tagItem of this.tags) {
          let tag: string = tagItem.value.toLowerCase();

          // Career
          if (tag == course.career.toLowerCase()) {
            continue;
          }
          // Name
          if (course.name.toLowerCase().includes(tag)) {
            continue;
          }
          // Code
          if (course.code.toLowerCase().includes(tag)) {
            continue;
          }
          // Faculty
          if (course.faculty.toLowerCase().includes(tag)) {
            continue;
          }

          flag = false;
          break;
        }

        if (flag) {
          filterCourse.push(course);
        }

      }

      this.totalItems = filterCourse.length;
      this.courseList = filterCourse.slice(offset, end > this.totalItems ? this.totalItems : end);
      console.log("filter size:", filterCourse.length);

      return;
    }

    this.totalItems = this.totalCourseList.length;
    this.courseList = this.totalCourseList.slice(offset, end > this.totalItems ? this.totalItems : end);
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

  // TODO query string list.
  public onAdd(item) {
    console.log('tag added: value is ' + item.value);
    // this.searchText = item.value;
    // this.searchTextStream.next(this.searchText);

    for (let tag of this.tags) {
      // tag.display = tag.display.toUpperCase();
      tag.value = tag.value.toLowerCase();
    }

    console.log(this.tags);

    this.loadDataByPage(1);

    // convert tag to lowercase
    // display value

    // for (let tag of this.tags) {
    //   console.log(tag);
    //   tag.value = tag.value.toLowerCase();
    // }

    // do search
  }

  // public gotoWrite(): void {
  //   //TODO：如果没有登录，跳转到登录页，如果已登录，跳往写作页
  //   // console.log("user/write")
  //   this.router.navigateByUrl("user/write");
  // }
}
