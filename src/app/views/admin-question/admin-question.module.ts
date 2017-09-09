import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminQuestionListComponent} from "./admin-question-list/admin-question-list.component";
import {adminQuestionRoutes} from "./admin-question.routes";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdInputModule,
  MdPaginatorModule,
  MdGridListModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdCardModule,
  MdButtonModule,
  MdIconModule,
  MdChipsModule,
  MdListModule
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
    RouterModule.forChild(adminQuestionRoutes)
  ],
  declarations: [AdminQuestionListComponent]
})
export class AdminQuestionModule { }
