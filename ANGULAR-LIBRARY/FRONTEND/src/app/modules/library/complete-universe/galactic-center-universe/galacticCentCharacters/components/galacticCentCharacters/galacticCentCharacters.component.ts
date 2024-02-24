
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentCharacters',
  templateUrl: './galacticCentCharacters.component.html',
  styleUrls: ['./galacticCentCharacters.component.css']
})
export class galacticCentCharactersComponent implements OnInit {
@Input() galacticCentCharacter: any
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
  

