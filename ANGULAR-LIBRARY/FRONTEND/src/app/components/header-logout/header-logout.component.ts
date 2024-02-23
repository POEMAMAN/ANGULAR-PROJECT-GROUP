import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth/services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header-logout',
  templateUrl: './header-logout.component.html',
  styleUrls: ['./header-logout.component.css']
})
export class HeaderLogoutComponent implements OnInit{
  userData: any;


  isTokenPresent(): boolean {
    return !!sessionStorage.getItem('token-app');
  }

  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
  getUserFromToken(): any {
    const token = sessionStorage.getItem('token-app');
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
  ngOnInit(): void {
    this.userData = this.getUserFromToken();
    console.log('User data:', this.userData);
  }

}


  

