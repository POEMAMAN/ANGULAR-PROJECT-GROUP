import { seafordBooksService } from './../../services/seafordBooks.service';

import { SeafordBook } from '../../interfaces/seafordBooks.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seafordBooks-page',
  templateUrl: './seafordBooks-page.component.html',
  styleUrls: ['./seafordBooks-page.component.css']
})
export class seafordBooksPageComponent implements OnInit {
  seafordBooks: SeafordBook[] = []
  constructor(private seafordBooksService: seafordBooksService ) {}


  ngOnInit(){
    this.seafordBooksService.getSeafordBooks().subscribe({
      next: (seafordBooks: SeafordBook[]) => {
        this.seafordBooks = seafordBooks
      },
      error: () => {}
    })
  }

}
