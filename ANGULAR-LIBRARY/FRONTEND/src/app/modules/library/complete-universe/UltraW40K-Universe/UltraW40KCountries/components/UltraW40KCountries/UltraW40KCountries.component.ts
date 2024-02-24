
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KCountries',
  templateUrl: './UltraW40KCountries.component.html',
  styleUrls: ['./UltraW40KCountries.component.scss']
})
export class UltraW40KCountriesComponent implements OnInit {
@Input() UltraW40KCountrie: any
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
  

