import {User} from "../../models/user/user-model";
import {Subject, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {CoreService} from "../core.service";
/**
 * Created by langley on 16/8/17.
 */

@Injectable()
export class UserLoginService {
  // public userLoginURL = 'mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();

  constructor(public http: Http,
              public coreService: CoreService) {
  }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public login(user: User) {
    console.log("login service:", user);
    return this.http
      .post(this.coreService.baseUrl + "/api/login", JSON.stringify(user))
      .map((response: Response) => {
        let user = response.json();
        console.log("user object -> " + user);
        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.subject.next(Object.assign({}, user));
        }
        return response;
      });
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
