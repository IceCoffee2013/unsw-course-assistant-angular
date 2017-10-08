import {Component, OnInit} from "@angular/core";
import {CourseListService} from "../../../services/course/course-list.service";
import {Course} from "../../../models/course/course-model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.scss']
})
export class AdminCourseListComponent implements OnInit {
  // public maxSize: number = 12;
  public tags = [];
  public itemsPerPage: number = 12;
  public pageSizeOptions = [12, 15, 24];
  public totalItems: number;

  public currentPage: number = 1;

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public courseList: Array<Course>;
  public totalCourseList: Array<Course>;

  courseForm: FormGroup;
  course = new Course();
  selectedCourse = new Course();

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              private fb: FormBuilder,
              public courseService: CourseListService) {
    this.createForm();
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

  createForm(): void {
    this.courseForm = this.fb.group({
      'id': [this.selectedCourse.id, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
      'code': [this.selectedCourse.code, Validators.required],
      'name': [this.selectedCourse.name, Validators.required],
      'school': [this.selectedCourse.school, Validators.required],
      'career':[this.selectedCourse.career, Validators.required],
      'description': [this.selectedCourse.description, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(2048)
      ]],
      'tags': [this.selectedCourse.tag]
    })
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.createForm();
  }

  addCourse(course: Course): void {
    this.courseList.push(course);
    this.newCourse();
    this.courseService.addCourse(course);
  }

  newCourse() {
    this.selectedCourse = new Course();
    this.createForm();
  }

  onSubmit() {
    this.course = this.courseForm.value;
    if (this.course.id !== this.selectedCourse.id) {
      this.addCourse(this.course);
    } else {
      this.courseList.forEach(
        (value, index) => {
          if (value.id === this.course.id) {
            console.log('Index', index);
            const a = this.courseList.indexOf(this.selectedCourse);
            this.courseList[a] = this.course;
          }
        }
      );
      console.log(this.selectedCourse);
      this.updateCourse(this.course);
      console.log(this.course);
    }
  }

  deleteCourse(course: Course): void {
    this.courseList.forEach(
      (value, index) => {
        if (value.id === course.id) {
          console.log('Index', index);
          this.courseList.splice(index, 1);
        }
      }
    );
    // server delete
    console.log(this.course);
    this.courseService.deleteCourse(course.id);
    this.selectedCourse = null;
  }

  updateCourse(course:Course): void{
    this.selectedCourse = null;
    this.courseService.updateCourse(course.id).subscribe(
      data => {
        console.log("update success" + data)
      },
      err => {
        console.log("update fail" + err)
      }
    );

  }
  items: string[] = ['java', 'python'];
  autocompleteItems: string[] = ['Item1', 'item2', 'item3'];

  public onAdd(item) {
    console.log('tag added: value is ' + item);
  }
  public pageChanged(event: any): void {
    let pageNumber = event.pageIndex + 1;
    console.log("event page: " + pageNumber);
    this.router.navigateByUrl("admin/course/page/" + pageNumber);
  }
}
