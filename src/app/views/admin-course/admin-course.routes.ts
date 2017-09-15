import {AdminCourseListComponent} from "./admin-course-list/admin-course-list.component";
import {AdminCourseDetailComponent} from "./admin-course-detail/admin-course-detail.component";

export const adminCourseRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: AdminCourseListComponent
  },
  {
    path: 'detail/:id',
    component: AdminCourseDetailComponent
   }
];
