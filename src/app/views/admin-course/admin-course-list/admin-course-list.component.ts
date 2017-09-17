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
  courseForm: FormGroup;
  course = new Course();
  selectedCourse = new Course();
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
              private fb: FormBuilder,
              public courseService: CourseListService) {
    this.createForm();
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

  createForm(): void {
    this.courseForm = this.fb.group({
      'id': [this.selectedCourse.id, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
      'name': [this.selectedCourse.name, Validators.required],
      'school': [this.selectedCourse.school, Validators.required],
      'description': [this.selectedCourse.description, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(256)
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
      console.log(this.course.tag);
      console.log(this.selectedCourse.tag);
      const a = this.courseList.indexOf(this.selectedCourse);
      this.courseList[a] = this.course;
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
    this.courseService.delectCourse(course.id);
    this.selectedCourse = null;
  }

  items: string[] = ['java', 'python'];
  autocompleteItems: string[] = ['Item1', 'item2', 'item3'];

  public onAdd(item) {
    console.log('tag added: value is ' + item);
  }

}
