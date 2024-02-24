import { FundacionBook } from '../../interfaces/FundacionBooks.interface';
import { fundacionBooksService } from '../../services/fundacionBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundacionBooks-page',
  templateUrl: './fundacionBooks-page.component.html',
  styleUrls: ['./fundacionBooks-page.component.scss']
})
export class fundacionBooksPageComponent implements OnInit {
  fundacionBooks: FundacionBook[] = []
  constructor(private fundacionBooksService: fundacionBooksService ) {}


  ngOnInit(){
    this.fundacionBooksService.getFundacionBooks().subscribe({
      next: (fundacionBooks: FundacionBook[]) => {
        this.fundacionBooks = fundacionBooks
      },
      error: () => {}
    })
  }

}
