import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {courseRoutes} from "./course.routes";
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailMainComponent} from "./course-detail-main/course-detail-main.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CommonModule} from "@angular/common";
import {
  MdListModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdSlideToggleModule,
  MdInputModule,
  MdGridListModule,
  MdChipsModule,
  MdPaginatorModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {CourseListService} from "../../services/course/course-list.service";
import {CourseRelatedComponent} from "./course-related/course-related.component";
import {CommentModule} from "../comment/comment.module";
import {TagInputModule} from "ngx-chips";

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
    CommentModule,
    TagInputModule, // chip
    // PaginationModule.forRoot(),
    RouterModule.forChild(courseRoutes)
  ],
  declarations: [
    CourseListComponent,
    CourseDetailMainComponent,
    CourseDetailComponent,
    CourseRelatedComponent,
  ],
  exports: [],
  providers: [
    CourseListService,
  ]
})
export class CourseModule {
}
