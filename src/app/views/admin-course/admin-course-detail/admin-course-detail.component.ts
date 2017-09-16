import {Component, Input, OnInit,OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../models/course/course-model";
import {CourseListService} from "../../../services/course/course-list.service";
import {CourseDetailService} from "../../../services/course/course-detail.service";
@Component({
  selector: 'app-admin-course-detail',
  templateUrl: './admin-course-detail.component.html',
  styleUrls: ['./admin-course-detail.component.css']
})
export class AdminCourseDetailComponent implements OnInit {
  @Input() course: Course;
  courseForm: FormGroup;

  public courseList: Array<Course>;

  constructor(private fb: FormBuilder,
              public courseService: CourseListService,
              private courseDetailService: CourseDetailService) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.courseForm.reset({
      id: this.course.id,
      name: this.course.name,
      school: this.course.school,
      description: this.course.description,
      tads: this.course.tag
    });
  }

  createForm() {
    this.courseForm = this.fb.group({
      id: ['', Validators.required],
      name: '',
      school: '',
      description: '',
      tags: '',
    });
  }
  submit = false;
  onSubmit() {
    this.course = this.courseForm.value;
    this.courseService.addCourse(this.course);
    this.ngOnChanges();
  }
  revert() { this.ngOnChanges(); }
}
