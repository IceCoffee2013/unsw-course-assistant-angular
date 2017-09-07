import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
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
  MdPaginatorModule,
  MdFormFieldModule,
  MdTabsModule,
  MdDialogModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {topanserRoutes} from "./top-answer.routes";
import {QuillModule} from "ngx-quill";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FileUploadModule} from "ng2-file-upload/ng2-file-upload";
import {TopAnswerListComponent, QuestionContentDialog} from "./top-answer-list/top-answer-list.component";
import {CommonModule} from "@angular/common";
import {TagInputModule} from "ngx-chips";
import {QuestionService} from "../../services/top-answer/question-service";
import {QuestionInfoComponent} from "./question-info/question-info.component";
import {QuestionStatusComponent} from "./question-status/question-status.component";
import {TopAnswerDetailComponent} from "./top-answer-detail/top-answer-detail.component";
import {TopAnswerDetailMainComponent} from "./top-answer-detail-main/top-answer-detail-main.component";
import {AnswerService} from "../../services/top-answer/answer-service";
import {CommentModule} from "../comment/comment.module";


@NgModule({
  imports: [
    // SharedModule,
    CommonModule,
    // BrowserAnimationsModule,
    FormsModule,
    MdListModule,
    MdChipsModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdTabsModule,
    MdPaginatorModule,
    MdInputModule,
    MdDialogModule,
    MdFormFieldModule,
    FlexLayoutModule,
    RouterModule,
    QuillModule,
    NgxDatatableModule,
    FileUploadModule,
    TagInputModule, // chip
    CommentModule,  // comment
    // PaginationModule.forRoot(),
    RouterModule.forChild(topanserRoutes)
  ],
  declarations: [
    TopAnswerListComponent,
    QuestionContentDialog,
    QuestionInfoComponent,
    QuestionStatusComponent,
    TopAnswerDetailComponent,
    TopAnswerDetailMainComponent
  ],
  exports: [],
  providers: [
    QuestionService,
    AnswerService
  ],
  entryComponents: [
    QuestionContentDialog
  ]
})
export class TopAnswerModule {
}
