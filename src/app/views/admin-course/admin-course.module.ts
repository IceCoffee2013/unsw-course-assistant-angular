import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminCourseListComponent} from "./admin-course-list/admin-course-list.component";
import {adminCourseRoutes} from "./admin-course.routes";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdInputModule, MdPaginatorModule, MdGridListModule, MdSlideToggleModule, MdMenuModule,
  MdButtonModule, MdCardModule, MdChipsModule, MdIconModule, MdListModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {CourseListService} from "../../services/course/course-list.service";
import { AdminCourseDetailComponent } from './admin-course-detail/admin-course-detail.component';
import {CourseDetailService} from "../../services/course/course-detail.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdListModule,
    MdChipsModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdPaginatorModule,
    MdInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forChild(adminCourseRoutes)
  ],
  declarations: [
    AdminCourseListComponent,
    AdminCourseDetailComponent
  ],
  providers: [
    CourseListService,
    CourseDetailService
  ]
})
export class AdminCourseModule {
}
