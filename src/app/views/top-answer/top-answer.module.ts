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
import {topanserRoutes} from './top-answer.routes';
import { QuillModule } from 'ngx-quill';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import {MdTabsModule} from '@angular/material';
import {TopAnswerListComponent} from './top-answer-list/top-answer-list.component';
import {MdDialogModule} from '@angular/material';


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
    MdTabsModule,
    MdPaginatorModule,
    MdInputModule,
    MdDialogModule,
    FlexLayoutModule,
    RouterModule,
    QuillModule,
    NgxDatatableModule,
    FileUploadModule,
    // PaginationModule.forRoot(),
    RouterModule.forChild(topanserRoutes)
  ],
  declarations: [
    TopAnswerListComponent,
  ],
  exports: [],
  providers: [
  ]
})
export class TopAnswerModule {
}
