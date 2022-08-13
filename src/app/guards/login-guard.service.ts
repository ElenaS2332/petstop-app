import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})

export class LoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private _cookieService: CookieService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let isLoggedIn = this._cookieService.get('IS_LOGGED_IN');
        if (isLoggedIn === 'true') {
           return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }

}