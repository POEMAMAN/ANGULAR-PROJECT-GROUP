import { Book } from '../../interfaces/Books.interface';
import { BooksService } from '../../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {
  books: Book[] = []
  constructor(private booksService: BooksService ) {}


  ngOnInit(){
    this.booksService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books
      },
      error: () => {}
    })
  }

}
