import { DuneBook } from '../../interfaces/DuneBooks.interface';
import { duneBooksService } from '../../services/duneBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneBooks-page',
  templateUrl: './duneBooks-page.component.html',
  styleUrls: ['./duneBooks-page.component.scss']
})
export class duneBooksPageComponent implements OnInit {
  duneBooks: DuneBook[] = []
  constructor(private duneBooksService: duneBooksService ) {}


  ngOnInit(){
    this.duneBooksService.getDuneBooks().subscribe({
      next: (duneBooks: DuneBook[]) => {
        this.duneBooks = duneBooks
      },
      error: () => {}
    })
  }
  

}
