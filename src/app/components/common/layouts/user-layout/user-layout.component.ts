import {Component, OnInit, ViewChild} from "@angular/core";
import {
  Router, NavigationEnd, RouterStateSnapshot, RouterState, ActivatedRouteSnapshot,
  ActivatedRoute
} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {MdSidenav} from "@angular/material";
import {TranslateService} from "ng2-translate/ng2-translate";
import * as Ps from "perfect-scrollbar";
import * as domHelper from "../../../../helpers/dom.helper";
import {User} from "../../../../models/user/user-model";
import {UserRegisterService} from "../../../../services/user/user-register.service";
import {UserLoginService} from "../../../../services/user/user-login.service";

@Component({
  selector: 'app-user-layout',
  templateUrl: 'user-layout.component.html'
})
export class UserLayoutComponent implements OnInit {
  private isMobile;
  public currentUser: User;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = false;
  @ViewChild(MdSidenav) private sideNave: MdSidenav;

  constructor(private router: Router,
              private media: ObservableMedia,
              public translate: TranslateService,
              public activatedRoute: ActivatedRoute,
              public userLoginService: UserLoginService,
              public userRegisterService: UserRegisterService) {
    // Close sidenav after route change in mobile
    router.events.subscribe((routeChange) => {
      if (routeChange instanceof NavigationEnd && this.isMobile) {
        this.sideNave.close();
      }
    });
    // Watches screen size and open/close sidenav
    this.screenSizeWatcher = media.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
      this.updateSidenav();
    });

    // Translator init
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    // Initialize Perfect scrollbar for sidenav
    let navigationHold = document.getElementById('scroll-area');
    Ps.initialize(navigationHold, {
      suppressScrollX: true
    });

    // TODO set user info
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.userLoginService.currentUser
      .merge(this.userRegisterService.currentUser)
      .subscribe(
        data => {
          this.currentUser = data;
          let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
          let routerState: RouterState = this.router.routerState;
          let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

          console.log(activatedRouteSnapshot);
          console.log(routerState);
          console.log(routerStateSnapshot);

          //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
          // if (routerStateSnapshot.url.indexOf("/login") != -1) {
          //   this.router.navigateByUrl("/home");
          // }
        },
        error => console.error(error)
      );

  }

  updateSidenav() {
    var self = this;
    setTimeout(() => {
      self.isSidenavOpen = !self.isMobile;
      self.sideNave.mode = self.isMobile ? 'over' : 'side';
      if (self.isMobile)
        domHelper.removeClass(document.body, 'collapsed-menu');
    })
  }

}
