import { ExpanseBook } from '../../interfaces/ExpanseBooks.interface';
import { expanseBooksService } from '../../services/expanseBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanseBooks-page',
  templateUrl: './expanseBooks-page.component.html',
  styleUrls: ['./expanseBooks-page.component.scss']
})
export class expanseBooksPageComponent implements OnInit {
  expanseBooks: ExpanseBook[] = []
  constructor(private expanseBooksService: expanseBooksService ) {}


  ngOnInit(){
    this.expanseBooksService.getExpanseBooks().subscribe({
      next: (expanseBooks: ExpanseBook[]) => {
        this.expanseBooks = expanseBooks
      },
      error: () => {}
    })
  }

}
