import { Component, OnInit } from '@angular/core';
import { Author } from '../../authors-interface';
import { AuthorsService } from '../../service/authors.service';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
})  
export class AuthorspageComponent implements OnInit {
  authors: Author[] = [];
  
  constructor(private AuthorsService: AuthorsService){
  }
  //inyecto el servicio
  
  ngOnInit(): void {
    this.AuthorsService.getAuthors().subscribe({next: (response: any) => {
      this.authors = response.results
    console.log(response)}
    //gestionala respuesta cuando da ok
  
  
    ,
    error: (error) => {}
    //gestiona le posible error desde la api
  })
  }
  }



