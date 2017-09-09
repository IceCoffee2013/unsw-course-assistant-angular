import {AdminUserListComponent} from "./admin-user-list/admin-user-list.component";

export const adminUserRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: AdminUserListComponent
  },
  // {
  //   path: 'detail/:id',
  //   component: CourseDetailMainComponent
  // }
];
