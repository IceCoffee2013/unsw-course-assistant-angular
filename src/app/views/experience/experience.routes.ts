import { RouterModule } from '@angular/router';
import {ExperienceListComponent} from './experience-list/experience-list.component';
import {ExperienceDetailMianComponent} from "./experience-detail-main/experience-detail-mian.component";
import {ExperiencePublishComponent} from "./experience-publish/experience-publish.component";
import {ExperienceCommentComponent} from "./experience-comment/experience-comment.component";

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
    path: 'experiencedetail',
    component: ExperienceDetailMianComponent
  },
  {
    path: 'publish',
    component: ExperiencePublishComponent
  },
  {
    path: 'expcomment',
    component: ExperienceCommentComponent
  }
];
