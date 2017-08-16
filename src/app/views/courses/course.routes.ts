import { RouterModule } from '@angular/router';

import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailMainComponent} from './course-detail-main/course-detail-main.component';

export const courseRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {path: 'page/:page',
    component: CourseListComponent
  },
  {
    path: 'detail/:id',
    component: CourseDetailMainComponent
  }
];
