import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AppConfig } from '@core/configs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivateChild {

  roleId:any;
  constructor(
    private router: Router
  ) {
    this.roleId=JSON.
    parse
    (localStorage.
    getItem
    (AppConfig.auth.token)||'').roleId
   }

  private checkGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    if (!this.isAuthorized(state)) {
      this.router.navigate(['no-access']);
      return of(false);
    } else {
      return of(true);
    }
  }

  private isAuthorized(state: RouterStateSnapshot): boolean {
    if ((state.url.includes("author") ||
    state.url.includes("author/add") ||
    state.url.includes("author/update/:id") ||
    state.url.includes("book/add")  ||
    state.url.includes("book/update/:id") ||
    state.url.includes("fine") ||
    state.url.includes("fine/update/:id") ||
    state.url.includes("transaction") ||
    state.url.includes("transaction/add") ||
    state.url.includes("transaction/add-return") ||
    state.url.includes("transaction/update/:id") ||
    state.url.includes("user") ||
    state.url.includes("user/add") ||
    state.url.includes("user/update/:id")) && this.roleId === 2) {
      return false;
    }
    else if((state.url.includes("user/add")||
    state.url.includes("user/update/:id") ||
    state.url.includes("fine/update/:id") ||
    state.url.includes("user")
  ) && this.roleId===1)  {
      return false;
    }

   else
    // Add a default return statement
    return true;
  }
  
  canActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    return this.checkGuard(activatedRouteSnapshot, state);
  }
}
