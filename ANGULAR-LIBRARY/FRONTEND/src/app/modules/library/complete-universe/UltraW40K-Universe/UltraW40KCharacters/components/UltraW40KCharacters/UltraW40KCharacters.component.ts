
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KCharacters',
  templateUrl: './UltraW40KCharacters.component.html',
  styleUrls: ['./UltraW40KCharacters.component.css']
})
export class UltraW40KCharactersComponent implements OnInit {
@Input() UltraW40KCharacter: any
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
  

