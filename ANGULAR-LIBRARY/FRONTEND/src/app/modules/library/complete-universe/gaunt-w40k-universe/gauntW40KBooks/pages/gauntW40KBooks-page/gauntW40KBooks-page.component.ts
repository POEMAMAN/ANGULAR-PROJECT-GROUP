import { GauntW40KBook } from '../../interfaces/GauntW40KBooks.interface';
import { gauntW40KBooksService } from '../../services/gauntW40KBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KBooks-page',
  templateUrl: './gauntW40KBooks-page.component.html',
  styleUrls: ['./gauntW40KBooks-page.component.scss']
})
export class gauntW40KBooksPageComponent implements OnInit {
  gauntW40KBooks: GauntW40KBook[] = []
  constructor(private gauntW40KBooksService: gauntW40KBooksService ) {}


  ngOnInit(){
    this.gauntW40KBooksService.getGauntW40KBooks().subscribe({
      next: (gauntW40KBooks: GauntW40KBook[]) => {
        this.gauntW40KBooks = gauntW40KBooks
      },
      error: () => {}
    })
  }

}
