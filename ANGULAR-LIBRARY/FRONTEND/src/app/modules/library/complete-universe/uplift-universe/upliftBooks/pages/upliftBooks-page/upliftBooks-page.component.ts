import { UpliftBook } from '../../interfaces/UpliftBooks.interface';
import { UpliftBooksService } from '../../services/upliftBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upliftBooks-page',
  templateUrl: './upliftBooks-page.component.html',
  styleUrls: ['./upliftBooks-page.component.scss']
})
export class UpliftBooksPageComponent implements OnInit {
  upliftBooks: UpliftBook[] = []
  constructor(private upliftBooksService: UpliftBooksService ) {}


  ngOnInit(){
    this.upliftBooksService.getUpliftBooks().subscribe({
      next: (upliftBooks: UpliftBook[]) => {
        this.upliftBooks = upliftBooks
      },
      error: () => {}
    })
  }

}
