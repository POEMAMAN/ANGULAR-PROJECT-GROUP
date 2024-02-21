
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KPlanets',
  templateUrl: './UltraW40KPlanets.component.html',
  styleUrls: ['./UltraW40KPlanets.component.css']
})
export class UltraW40KPlanetsComponent implements OnInit {
@Input() UltraW40KPlanet: any
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
  

