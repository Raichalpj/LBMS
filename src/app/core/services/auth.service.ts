/**
 * @author Vishnu Somanath
 * @version 1.0.0
 * @return {void}
 * @example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfig } from '../configs';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }

  authenticate(): Observable<any> {
    return this.communicationService.get<any>('')
      .pipe(
        tap((response: any) => {
          if (response.data) {
            localStorage.setItem(AppConfig.auth.token, response.data.token);
          }
        }));
  }

  authenticateFake(): Observable<any> {
    return of({});
  }

  isLoggedIn(): boolean {
    return true;
  }

  logout(): void {
    localStorage.removeItem(AppConfig.auth.token);
    this.router.navigate(['/auth/login']);
  }
}
