import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
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
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ExperienceListComponent} from "./experience-list/experience-list.component";
import {experienceRoutes} from "./experience.routes";
import {ExperienceDetailMainComponent} from "./experience-detail-main/experience-detail-main.component";
import {ExperiencePublishComponent} from "./experience-publish/experience-publish.component";
import { QuillModule } from 'ngx-quill';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import {ExperienceCommentComponent} from "./experience-comment/experience-comment.component";
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
    QuillModule,
    NgxDatatableModule,
    FileUploadModule,
    CommentModule,
    // PaginationModule.forRoot(),
    RouterModule.forChild(experienceRoutes)
  ],
  declarations: [
    ExperienceListComponent,
    ExperienceDetailMainComponent,
    ExperiencePublishComponent,
    ExperienceCommentComponent,
  ],
  exports: [],
  providers: [
  ]
})
export class ExperienceModule {
}
