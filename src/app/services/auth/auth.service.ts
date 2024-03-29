import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
  public authToken;
  private isAuthenticated = true; // Set this value dynamically

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated) {
      return true
    }
    this.router.navigate(['/sessions/signin']);
    return false;
  }

  public getToken(): string {

    if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).token) {
      return JSON.parse(localStorage.getItem('currentUser')).token;
    }
    return null;
  }

}
