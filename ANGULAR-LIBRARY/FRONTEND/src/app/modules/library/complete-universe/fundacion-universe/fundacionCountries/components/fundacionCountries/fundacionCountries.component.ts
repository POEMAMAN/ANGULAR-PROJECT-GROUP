
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KCountries',
  templateUrl: './gauntW40KCountries.component.html',
  styleUrls: ['./gauntW40KCountries.component.css']
})
export class gauntW40KCountriesComponent implements OnInit {
@Input() gauntW40KCountrie: any
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
  

