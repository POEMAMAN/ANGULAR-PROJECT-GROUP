import { ForEverWarBook } from '../../interfaces/ForEverWarBooks.interface';
import { forEverWarBooksService } from '../../services/forEverWarBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forEverWarBooks-page',
  templateUrl: './forEverWarBooks-page.component.html',
  styleUrls: ['./forEverWarBooks-page.component.css']
})
export class forEverWarBooksPageComponent implements OnInit {
  forEverWarBooks: ForEverWarBook[] = []
  constructor(private forEverWarBooksService: forEverWarBooksService ) {}


  ngOnInit(){
    this.forEverWarBooksService.getForEverWarBooks().subscribe({
      next: (forEverWarBooks: ForEverWarBook[]) => {
        this.forEverWarBooks = forEverWarBooks
      },
      error: () => {}
    })
  }

}
