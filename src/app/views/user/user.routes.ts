import { RouterModule } from '@angular/router';
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const userRoutes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserProfileComponent
  },
];
