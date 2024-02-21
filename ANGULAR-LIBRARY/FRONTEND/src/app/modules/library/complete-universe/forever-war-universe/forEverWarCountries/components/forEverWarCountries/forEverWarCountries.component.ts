
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forEverWarCountries',
  templateUrl: './forEverWarCountries.component.html',
  styleUrls: ['./forEverWarCountries.component.css']
})
export class forEverWarCountriesComponent implements OnInit {
@Input() forEverWarCountrie: any
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
  

