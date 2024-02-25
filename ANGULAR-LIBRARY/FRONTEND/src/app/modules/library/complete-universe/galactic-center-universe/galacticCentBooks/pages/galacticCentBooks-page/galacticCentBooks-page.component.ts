import { GalacticCentBook } from '../../interfaces/GalacticCentBooks.interface';
import { galacticCentBooksService } from '../../services/galacticCentBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentBooks-page',
  templateUrl: './galacticCentBooks-page.component.html',
  styleUrls: ['./galacticCentBooks-page.component.scss']
})
export class galacticCentBooksPageComponent implements OnInit {
  galacticCentBooks: GalacticCentBook[] = []
  constructor(private galacticCentBooksService: galacticCentBooksService ) {}


  ngOnInit(){
    this.galacticCentBooksService.getGalacticCentBooks().subscribe({
      next: (galacticCentBooks: GalacticCentBook[]) => {
        this.galacticCentBooks = galacticCentBooks
      },
      error: () => {}
    })
  }

}
