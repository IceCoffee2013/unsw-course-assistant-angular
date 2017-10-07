import {User} from "../../models/user/user-model";
import {Subject, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {CoreService} from "../core.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
/**
 * Created by langley on 16/8/17.
 */

@Injectable()
export class UserLoginService {
  // public userLoginURL = 'mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();

  constructor(public http: HttpClient, public router: Router,
              public coreService: CoreService) {
  }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public login(user: User) {
    console.log("login service:", user);
    return this.http
      .post<User>(this.coreService.baseUrl + "/api/login", JSON.stringify(user))
      .subscribe(
        data => {
          console.log("login success>" + data)
          if (data && data.token) {
            localStorage.setItem("currentUser", JSON.stringify(data));
            this.subject.next(Object.assign({}, data));
          }
          this.router.navigateByUrl("home");
        },
        error => {
          console.error(error);
        }
      );
    // .map((response: Response) => {
    //   let user = response.json();
    //   console.log("user object -> " + user);
    //   if (user && user.token) {
    //     localStorage.setItem("currentUser", JSON.stringify(user));
    //     this.subject.next(Object.assign({}, user));
    //   }
    //   return response;
    // });
    // .subscribe(
    //   data => {
    //     console.log("login success>" + data);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
