import { DuneBooksService } from './../../services/duneBooks.service';
import { DuneBook } from '../../interfaces/DuneBooks.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneBooks-page',
  templateUrl: './duneBooks-page.component.html',
  styleUrls: ['./duneBooks-page.component.css']
})
export class DuneBooksPageComponent implements OnInit {
  books: DuneBook[] = []
  constructor(private duneBooksService: DuneBooksService ) {}


  ngOnInit(){
    this.duneBooksService.getDuneBooks().subscribe({
      next: (books: DuneBook[]) => {
        this.books = books
      },
      error: () => {}
    })
  }

}
