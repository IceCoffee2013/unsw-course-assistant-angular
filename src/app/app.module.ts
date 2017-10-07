import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate/ng2-translate";
import {rootRouterConfig} from "./app.routes";
import {AppCommonModule} from "./components/common/app-common.module";
import {AppComponent} from "./app.component";
import {RoutePartsService} from "./services/route-parts/route-parts.service";
import {NavigationService} from "./services/navigation/navigation.service";
import {AuthService} from "./services/auth/auth.service";
import {UserRegisterService} from "./services/user/user-register.service";
import {UserLoginService} from "./services/user/user-login.service";
import {ForgetPwdService} from "./services/user/forget-pwd.service";
import {CommentModule} from "./views/comment/comment.module";
import {CoreService} from "./services/core.service";
import {HttpModule, Http} from "@angular/http";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {JWTInterceptor} from "./services/auth/jwt.Interceptor";


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppCommonModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(rootRouterConfig, {useHash: false})
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    RoutePartsService,
    NavigationService,
    AuthService,
    UserRegisterService,
    UserLoginService,
    ForgetPwdService,
    CoreService,
    CommentModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
