/**
 * Created by langley on 15/8/17.
 */

import {Injectable} from "@angular/core";
import {User} from "../../models/user/user-model";
import {Observable, Subject} from "rxjs";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {CoreService} from "../core.service";

@Injectable()
export class UserRegisterService {

  public userRegisterURL = "mock-data/user-register-mock.json";
  public testEmailURL = "";
  public subject: Subject<User> = new Subject<User>();

  constructor(public http:Http,
              public coreService: CoreService) {
  }

  public get currentUser():Observable<User>{
    return this.subject.asObservable();
  }

  public register(user: User){
    console.log(user);

    //向后台post数据的写法如下
    // let data = new URLSearchParams();
    // data.append('nickname', user.nickname);
    // data.append('password', user.password);
    // return this.http.post(this.userRegisterURL,data);

    let data = {
      "nickname" : user.nickname,
      "username" : user.username,
      "password" : user.password,
      "role" : "ROLE_USER"
    }

    let body = JSON.stringify(data);
    // console.log("body", body);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.coreService.baseUrl + "/api/register", body, options)
      .map((response: Response) => {
        let user = response.json();
        console.log("register result", user);
        localStorage.setItem("currentUser",JSON.stringify(user));
        this.subject.next(user);
      });
  }

  public testEmail(email:string){
    return this.http.get(this.testEmailURL)
      .map((response: Response) => response.json());
  }


}
