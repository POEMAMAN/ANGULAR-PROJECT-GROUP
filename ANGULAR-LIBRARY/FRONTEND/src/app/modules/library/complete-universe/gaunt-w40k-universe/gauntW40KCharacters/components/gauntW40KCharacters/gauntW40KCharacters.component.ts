
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KCharacters',
  templateUrl: './gauntW40KCharacters.component.html',
  styleUrls: ['./gauntW40KCharacters.component.scss']
})
export class gauntW40KCharactersComponent implements OnInit {
@Input() gauntW40KCharacter: any
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
  

