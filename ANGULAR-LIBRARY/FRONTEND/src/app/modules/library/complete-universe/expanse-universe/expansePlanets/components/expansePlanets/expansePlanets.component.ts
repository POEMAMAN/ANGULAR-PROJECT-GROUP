
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansePlanets',
  templateUrl: './expansePlanets.component.html',
  styleUrls: ['./expansePlanets.component.scss']
})
export class expansePlanetsComponent implements OnInit {
@Input() expansePlanet: any
isAdmin: boolean = false;
constructor(private authService: AuthService ){

}
ngOnInit(): void {
  this.authService.isAdmin().subscribe({
    next:(isAdmin: boolean) => {
      console.log(isAdmin)
      this.isAdmin = isAdmin;
    }, 
    error: (e) => {
      this.isAdmin = false;
    }
  })
}
}
  

