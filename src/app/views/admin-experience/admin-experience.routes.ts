import {AdminExperienceListComponent} from "./admin-experience-list/admin-experience-list.component";

export const adminExperienceRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: AdminExperienceListComponent
  },
  // {
  //   path: 'detail/:id',
  //   component: CourseDetailMainComponent
  // }
];
