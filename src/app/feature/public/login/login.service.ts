import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly landingScreen = '/dashboard';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(user:User): void {
    this.authService.authenticate(user)
      .subscribe((user:User) => {
        console.log(user);
        this.router.navigate([this.landingScreen]);
      });
  }
}
