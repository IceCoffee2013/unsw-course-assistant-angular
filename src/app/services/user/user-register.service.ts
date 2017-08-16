/**
 * Created by langley on 15/8/17.
 */

import {Injectable} from "@angular/core";
import {User} from "../../models/user/user-model";
import {Observable, Subject} from "rxjs";
import {Http, Response} from "@angular/http";

@Injectable()
export class UserRegisterService {

  public userRegisterURL = "mock-data/user-register-mock.json";
  public testEmailURL = "";
  public subject: Subject<User> = new Subject<User>();

  constructor(public http:Http) {
  }

  public get currentUser():Observable<User>{
    return this.subject.asObservable();
  }

  public register(user: User){
    console.log(user);

    //向后台post数据的写法如下
    // let data = new URLSearchParams();
    // data.append('email', user.email);
    // data.append('password', user.password);
    // return this.http.post(this.userRegisterURL,data);

    return this.http
      .get(this.userRegisterURL)
      .map((response: Response) => {
        let user = response.json();
        localStorage.setItem("currentUser",JSON.stringify(user));
        this.subject.next(user);
      });
  }

  public testEmail(email:string){
    return this.http.get(this.testEmailURL)
      .map((response: Response) => response.json());
  }


}
