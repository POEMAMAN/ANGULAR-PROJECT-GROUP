import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  register(user: any) {
    return this.http.post('http://localhost:8084/api/users/register', user)
  }
  confirmUser(token: string){
    return this.http.get(`http://localhost:8084/api/users/confirm-user/${token}`)
  }
  login(user: any) {
    return this.http.post('http://localhost:8084/api/users/login',user)
  }
  logout() {
    return this.http.get('http://localhost:8084/api/users/logout')
  }

  // logout(token: string): void {
  //   sessionStorage.removeItem(`${token}`); 
  //   this.router.navigate(['/main']);
  // }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8084/api/users/is-admin')
  }


}
