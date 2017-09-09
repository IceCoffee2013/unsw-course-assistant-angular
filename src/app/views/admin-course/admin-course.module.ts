import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminCourseListComponent} from "./admin-course-list/admin-course-list.component";
import {adminCourseRoutes} from "./admin-course.routes";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdInputModule, MdPaginatorModule, MdGridListModule, MdSlideToggleModule, MdMenuModule,
  MdButtonModule, MdCardModule, MdChipsModule, MdIconModule, MdListModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";

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
    RouterModule,
    RouterModule.forChild(adminCourseRoutes)
  ],
  declarations: [
    AdminCourseListComponent
  ]
})
export class AdminCourseModule { }
