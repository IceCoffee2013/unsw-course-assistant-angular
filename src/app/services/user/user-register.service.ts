/**
 * Created by langley on 15/8/17.
 */
import {Injectable} from "@angular/core";
import {User} from "../../models/user/user-model";
import {Observable, Subject} from "rxjs";
import {CoreService} from "../core.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class UserRegisterService {

  public userRegisterURL = "mock-data/user-register-mock.json";
  public testEmailURL = "";
  public subject: Subject<User> = new Subject<User>();

  constructor(public http: HttpClient, public router: Router,
              public coreService: CoreService) {
  }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public register(user: User) {
    console.log(user);

    //向后台post数据的写法如下
    // let data = new URLSearchParams();
    // data.append('nickname', user.nickname);
    // data.append('password', user.password);
    // return this.http.post(this.userRegisterURL,data);

    let data = {
      "nickname": user.nickname,
      "username": user.username,
      "password": user.password,
      "role": "ROLE_USER"
    }

    let body = JSON.stringify(data);
    // console.log("body", body);

    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");

    return this.http
      .post<User>(this.coreService.baseUrl + "/api/register", body, {headers})
      .subscribe(
        data => {
          console.log("register result", data);
          // localStorage.setItem("currentUser", JSON.stringify(data));
          this.subject.next(data);
          this.router.navigateByUrl("sessions/signin");
        },
        error => {
          console.error(error);
        }
      );
  }

  public testEmail(email: string) {
    return this.http.get(this.testEmailURL)
      .map((response: Response) => response.json());
  }


}
