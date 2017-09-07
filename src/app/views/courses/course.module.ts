import {NgModule} from "@angular/core";
// import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
// import {PaginationModule} from "ng2-bootstrap";
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
import {CourseDetailService} from "../../services/course/course-detail.service";
import {CourseCommentComponent} from "./course-comment/course-comment.component";
import {CourseRelatedComponent} from "./course-related/course-related.component";
import {CommentModule} from "../comment/comment.module";

@NgModule({
  imports: [
    // SharedModule,
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
    // PaginationModule.forRoot(),
    RouterModule.forChild(courseRoutes)
  ],
  declarations: [
    CourseListComponent,
    CourseDetailMainComponent,
    CourseDetailComponent,
    CourseCommentComponent,
    CourseRelatedComponent,
  ],
  exports: [],
  providers: [
    CourseListService,
    CourseDetailService,
  ]
})
export class CourseModule {
}
