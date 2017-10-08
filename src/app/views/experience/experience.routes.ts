import {RouterModule} from '@angular/router';
import {ExperienceListComponent} from './experience-list/experience-list.component';
import {ExperienceDetailMainComponent} from "./experience-detail-main/experience-detail-main.component";
import {ExperiencePublishComponent} from "./experience-publish/experience-publish.component";

export const experienceRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: ExperienceListComponent
  },
  {
    path: 'detail/:id',
    component: ExperienceDetailMainComponent
  },
  {
    path: 'publish',
    component: ExperiencePublishComponent
  }
];
