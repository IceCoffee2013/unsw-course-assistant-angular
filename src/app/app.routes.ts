import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';

import { AuthService } from './services/auth/auth.service';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'}
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'home',
        loadChildren: './views/courses/course.module#CourseModule',
        data: { title: 'Courses', breadcrumb: 'COURSES'}
      },
      {
        path: 'course',
        loadChildren: './views/courses/course.module#CourseModule',
        data: { title: 'Courses', breadcrumb: 'COURSES'}
      },
      {
        path: 'messages',
        loadChildren: './views/app-chats/app-chats.module#AppChatsModule',
        data: { title: 'Messages', breadcrumb: 'MESSAGES'}
      },
      {
        path: 'experience',
        loadChildren: './views/experience/experience.module#ExperienceModule',
        data: { title: 'Experience', breadcrumb: 'EXPERIENCE'}
      },
      {
        path: 'answer',
        loadChildren: './views/top-answer/top-answer.module#TopAnswerModule',
        data: { title: 'Answer', breadcrumb: 'TOP-ANSWER'}
      },
      {
        path: 'user',
        loadChildren: './views/user/user.module#UserModule',
        data: { title: 'UserProfile', breadcrumb: 'USER-PROFIlE'}
      }, {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule',
        data: { title: 'Profile', breadcrumb: 'PROFILE'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

