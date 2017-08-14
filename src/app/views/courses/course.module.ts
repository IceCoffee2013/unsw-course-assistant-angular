import {NgModule} from "@angular/core";
// import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
// import {PaginationModule} from "ng2-bootstrap";
import {courseRoutes} from "./course.routes";
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailMainComponent} from "./course-detail-main/course-detail-main.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
// import {MyCustomMaterialModule} from "../utils/my-custom-material.module";
import {
  MdListModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdSlideToggleModule,
  MdInputModule,
  MdGridListModule, MdChipsModule, MdPaginatorModule,
} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CourseListService} from "../../services/course/course-list.service";
import {CourseDetailService} from "../../services/course/course-detail.service";
import {CourseCommentComponent} from "./course-comment/course-comment.component"
import {CommentService} from "../../services/course/course-comment.service";
import {CourseRelatityComponent} from "./course-related/course-related.component";
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
    // PaginationModule.forRoot(),
    RouterModule.forChild(courseRoutes)
  ],
  declarations: [
    CourseListComponent,
    CourseDetailMainComponent,
    CourseDetailComponent,
    CourseCommentComponent,
    CourseRelatityComponent
  ],
  exports: [],
  providers: [
    CourseListService,
    CourseDetailService,
    CommentService
  ]
})
export class CourseModule {
}
