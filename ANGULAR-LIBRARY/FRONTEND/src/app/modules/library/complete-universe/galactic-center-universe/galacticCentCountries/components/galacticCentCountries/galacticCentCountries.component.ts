
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentCountries',
  templateUrl: './galacticCenCountries.component.html',
  styleUrls: ['./galacticCentCountries.component.css']
})
export class galacticCentCountriesComponent implements OnInit {
@Input() galacticCentCountrie: any
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
  

