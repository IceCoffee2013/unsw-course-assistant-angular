import { RouterModule } from '@angular/router';
import {ExperienceListComponent} from './experience-list/experience-list.component';
import {ExperienceDetailMainComponent} from "./experience-detail-main/experience-detail-main.component";
import {ExperiencePublishComponent} from "./experience-publish/experience-publish.component";
import {ExperienceCommentComponent} from "./experience-comment/experience-comment.component";
import {UserProfileComponent} from "../user/user-profile/user-profile.component";

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
    component: ExperienceDetailMainComponent
  },
  {
    path: 'publish',
    component: ExperiencePublishComponent
  },
  {
    path: 'expcomment',
    component: ExperienceCommentComponent
  },
];
