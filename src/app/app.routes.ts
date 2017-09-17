import {Routes} from "@angular/router";
import {UserLayoutComponent} from "./components/common/layouts/user-layout/user-layout.component";
import {AuthLayoutComponent} from "./components/common/layouts/auth-layout/auth-layout.component";
import {AuthService} from "./services/auth/auth.service";
import {AdminLayoutComponent} from "./components/common/layouts/admin-layout/admin-layout.component";

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
        data: {title: 'Session'}
      }
    ]
  },
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'home',
        loadChildren: './views/courses/course.module#CourseModule',
        data: {title: 'Courses', breadcrumb: 'COURSES'}
      },
      {
        path: 'course',
        loadChildren: './views/courses/course.module#CourseModule',
        data: {title: 'Courses', breadcrumb: 'COURSES'}
      },
      {
        path: 'answer',
        loadChildren: './views/top-answer/top-answer.module#TopAnswerModule',
        data: {title: 'Question', breadcrumb: 'QUESTION'}
      },
      {
        path: 'messages',
        loadChildren: './views/app-chats/app-chats.module#AppChatsModule',
        data: {title: 'Messages', breadcrumb: 'MESSAGES'}
      },
      {
        path: 'experience',
        loadChildren: './views/experience/experience.module#ExperienceModule',
        data: {title: 'Experience', breadcrumb: 'EXPERIENCE'}
      },
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule',
        data: {title: 'Profile', breadcrumb: 'PROFILE'}
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthService], // TODO
    children: [
      {
        path: 'home',
        loadChildren: './views/admin-course/admin-course.module#AdminCourseModule',
        data: {title: 'Admin', breadcrumb: 'HOME'}
      },
      {
        path: 'course',
        loadChildren: './views/admin-course/admin-course.module#AdminCourseModule',
        data: {title: 'Admin', breadcrumb: 'COURSES MANAGEMENT'}
      },
      {
        path: 'user',
        loadChildren: './views/admin-user/admin-user.module#AdminUserModule',
        data: {title: 'Admin', breadcrumb: 'USER MANAGEMENT'}
      },
      {
        path: 'question',
        loadChildren: './views/admin-question/admin-question.module#AdminQuestionModule',
        data: {title: 'Admin', breadcrumb: 'QUESTION MANAGEMENT'}
      },
      {
        path: 'experience',
        loadChildren: './views/admin-experience/admin-experience.module#AdminExperienceModule',
        data: {title: 'Admin', breadcrumb: 'EXPERIENCE MANAGEMENT'}
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

