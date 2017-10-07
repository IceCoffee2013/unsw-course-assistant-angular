import {
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpInterceptor
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercept");

    const JWT = this.authService.getToken();

    console.log("JWTInterceptor", JWT);

    if (JWT) {
      req = req.clone({
        setHeaders: {
          "x-auth-token": JWT
        }
      });
    }

    return next.handle(req);
  }
}
