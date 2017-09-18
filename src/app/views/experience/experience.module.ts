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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ExperienceListComponent} from "./experience-list/experience-list.component";
import {experienceRoutes} from "./experience.routes";
import {ExperienceDetailMainComponent} from "./experience-detail-main/experience-detail-main.component";
import {ExperiencePublishComponent} from "./experience-publish/experience-publish.component";
import { QuillModule } from 'ngx-quill';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import {CommentModule} from "../comment/comment.module";
import {TagInputModule} from "ngx-chips";
import {ExperienceListService} from "../../services/experience/experience-list.service";

@NgModule({
  imports: [
    // SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    TagInputModule,
    FileUploadModule,
    TagInputModule, // chip
    CommentModule,
    // PaginationModule.forRoot(),
    RouterModule.forChild(experienceRoutes)
  ],
  declarations: [
    ExperienceListComponent,
    ExperienceDetailMainComponent,
    ExperiencePublishComponent,
  ],
  exports: [],
  providers: [
    ExperienceListService,
  ]
})
export class ExperienceModule {
}
