import { OldManWarBook } from '../../interfaces/OldManWarBooks.interface';
import { Component, OnInit } from '@angular/core';
import { oldManWarBooksService } from '../../services/oldManWarBooks.service';

@Component({
  selector: 'app-oldManWarBooks-page',
  templateUrl: './oldManWarBooks-page.component.html',
  styleUrls: ['./oldManWarBooks-page.component.css']
})
export class oldManWarBooksPageComponent implements OnInit {
  oldManWarBooks: OldManWarBook[] = []
  constructor(private oldManWarBooksService: oldManWarBooksService ) {}


  ngOnInit(){
    this.oldManWarBooksService.getOldManWarBooks().subscribe({
      next: (oldManWarBooks: OldManWarBook[]) => {
        this.oldManWarBooks = oldManWarBooks
      },
      error: () => {}
    })
  }

}
