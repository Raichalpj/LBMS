import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly landingScreen = '/dashboard';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    this.authService.authenticate()
      .subscribe((x) => {
        this.router.navigate([this.landingScreen]);
      });
  }
}
