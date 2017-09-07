import { RouterModule } from '@angular/router';
import {TopAnswerListComponent} from "./top-answer-list/top-answer-list.component";

export const topanserRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  }, {
  path: 'page/:page',
  component: TopAnswerListComponent
  },
];
