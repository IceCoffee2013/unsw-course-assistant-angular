import {AdminUserListComponent} from "./admin-user-list/admin-user-list.component";
import {AdminUserDetailComponent} from "./admin-user-detail/admin-user-detail.component";

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
  {
     path: 'detail/:id',
     component: AdminUserDetailComponent
   }
];
