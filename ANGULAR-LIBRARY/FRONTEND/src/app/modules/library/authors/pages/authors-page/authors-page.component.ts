import { Author } from '../../interfaces/Authors.interface';
import { AuthorsService } from '../../services/authors.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.scss']
})
export class AuthorsPageComponent implements OnInit {
  authors: Author[] = []
  constructor(private authorsService: AuthorsService ) {}


  ngOnInit(){
    this.authorsService.getAuthors().subscribe({
      next: (authors: Author[]) => {
        this.authors = authors
      },
      error: () => {}
    })
  }

}
