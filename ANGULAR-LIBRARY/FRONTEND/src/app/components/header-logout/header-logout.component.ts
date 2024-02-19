import { Component } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header-logout',
  templateUrl: './header-logout.component.html',
  styleUrls: ['./header-logout.component.css']
})
export class HeaderLogoutComponent {

  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
}
