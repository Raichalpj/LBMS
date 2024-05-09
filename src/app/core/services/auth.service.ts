/**
 * @author Vishnu Somanath
 * @version 1.0.0
 * @return {void}
 * @example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfig } from '../configs';
import { CommunicationService } from './communication.service';
import { User } from 'src/app/feature/public/login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  roleId!:number;
  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }

  authenticate(user:User): Observable<User> {
    return this.communicationService.post<any>(UserAPI.authenticateUser(),user)
      .pipe(
        tap((response: any) => {
          if (response) {
            localStorage.setItem(AppConfig.auth.token, JSON.stringify(response));
          }
        }));
  }

  isLoggedIn(): boolean {
    return true;
  }

  getUserRole():number{
    this.roleId= JSON.parse(localStorage.getItem(AppConfig.auth.token)||'{}').roleId;
    return this.roleId;
  }
  logout(): void {
    localStorage.removeItem(AppConfig.auth.token);
    this.router.navigate(['/auth/login']);
  }
}
