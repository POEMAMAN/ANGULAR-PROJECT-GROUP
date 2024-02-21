
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KPlanets',
  templateUrl: './gauntW40KPlanets.component.html',
  styleUrls: ['./gauntW40KPlanets.component.css']
})
export class gauntW40KPlanetsComponent implements OnInit {
@Input() gauntW40KPlanet: any
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
  

