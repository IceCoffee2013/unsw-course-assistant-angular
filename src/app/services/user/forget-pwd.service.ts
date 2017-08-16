import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ForgetPwdService {
  public validateEmailURL = "mock-data/forget-pwd-mock.json";

  constructor(public http: Http) { }

  public sendValidationEmail(email: string):Observable<any>{
    return this.http.get(this.validateEmailURL)
      .map((res: Response) => res.json());
  }
}
