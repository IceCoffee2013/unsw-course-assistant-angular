import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdIconModule,
  MdButtonModule,
  MdRadioModule,
  MdCardModule,
  MdToolbarModule,
  MdGridListModule,
  MdSnackBarModule,
  MdSelectModule,
  MdOptionModule,
  MdTooltipModule,  MdInputModule,
  MdListModule
} from "@angular/material";
import {CommentComponent} from "./comment.component";
import {CommentService} from "../../services/comment/comment.service";
import {AppConfirmModule} from "../../services/app-confirm/app-confirm.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    MdIconModule,
    MdListModule,
    MdTooltipModule,
    MdOptionModule,
    MdSelectModule,
    MdSnackBarModule,
    MdGridListModule,
    MdToolbarModule,
    MdButtonModule,
    MdRadioModule,
    MdCardModule,
    MdInputModule,
    AppConfirmModule
  ],
  declarations: [
    CommentComponent
  ],
  providers: [
    CommentService
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule {
}
