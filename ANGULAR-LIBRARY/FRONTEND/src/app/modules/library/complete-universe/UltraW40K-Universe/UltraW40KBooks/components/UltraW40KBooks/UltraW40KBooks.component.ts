
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KBooks',
  templateUrl: './UltraW40KBooks.component.html',
  styleUrls: ['./UltraW40KBooks.component.css']
})
export class UltraW40KBooksComponent implements OnInit {
@Input() UltraW40KBook: any
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
  

