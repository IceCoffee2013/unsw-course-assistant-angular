import {TopAnswerListComponent} from "./top-answer-list/top-answer-list.component";
import {TopAnswerDetailMainComponent} from "./top-answer-detail-main/top-answer-detail-main.component";

export const topAnswerRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: TopAnswerListComponent
  },
  {
    path: 'detail/:id',
    component: TopAnswerDetailMainComponent
  }
];
