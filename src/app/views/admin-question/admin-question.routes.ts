import {AdminQuestionListComponent} from "./admin-question-list/admin-question-list.component";

export const adminQuestionRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: AdminQuestionListComponent
  },
  // {
  //   path: 'detail/:id',
  //   component: CourseDetailMainComponent
  // }
];
