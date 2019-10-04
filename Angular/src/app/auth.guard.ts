import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(private _authService: AuthService, private router: Router) { }

  public canActivate(): boolean {
    if (this._authService.loggedIn()==true) {
      return true;
    }
    else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
