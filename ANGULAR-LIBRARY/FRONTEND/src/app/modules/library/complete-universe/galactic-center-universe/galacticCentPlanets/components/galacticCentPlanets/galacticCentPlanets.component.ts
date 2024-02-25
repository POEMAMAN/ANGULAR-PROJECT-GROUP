
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentPlanets',
  templateUrl: './galacticCentPlanets.component.html',
  styleUrls: ['./galacticCentPlanets.component.scss']
})
export class galacticCentPlanetsComponent implements OnInit {
@Input() galacticCentPlanet: any
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
  

