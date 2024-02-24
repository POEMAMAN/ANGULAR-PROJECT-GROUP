
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentBooks',
  templateUrl: './galacticCentBooks.component.html',
  styleUrls: ['./galacticCentBooks.component.css']
})
export class galacticCentBooksComponent implements OnInit {
@Input() galacticCentBook: any
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
  

