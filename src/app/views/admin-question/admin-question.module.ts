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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminQuestionDetailComponent } from './admin-question-detail/admin-question-detail.component';
import {QuestionService} from "../../services/top-answer/question-service";

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
    ReactiveFormsModule,
    MdGridListModule,
    MdPaginatorModule,
    MdInputModule,
    FlexLayoutModule,
    RouterModule.forChild(adminQuestionRoutes)
  ],
  declarations: [AdminQuestionListComponent, AdminQuestionDetailComponent],
  providers: [
    QuestionService
  ]
})
export class AdminQuestionModule { }
