
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KBooks',
  templateUrl: './gauntW40KBooks.component.html',
  styleUrls: ['./gauntW40KBooks.component.css']
})
export class gauntW40KBooksComponent implements OnInit {
@Input() gauntW40KBook: any
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
  

