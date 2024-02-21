
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forEverWarPlanets',
  templateUrl: './forEverWarPlanets.component.html',
  styleUrls: ['./forEverWarPlanets.component.css']
})
export class forEverWarPlanetsComponent implements OnInit {
@Input() forEverWarPlanet: any
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
  

