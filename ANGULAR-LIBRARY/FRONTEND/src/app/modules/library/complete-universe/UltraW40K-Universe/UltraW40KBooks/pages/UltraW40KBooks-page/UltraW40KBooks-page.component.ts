import { UltraW40KBooksService } from './../../services/UltraW40KBooks.service';
import { UltraW40KBook } from '../../interfaces/UltraW40KBooks.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KBooks-page',
  templateUrl: './UltraW40KBooks-page.component.html',
  styleUrls: ['./UltraW40KBooks-page.component.scss']
})
export class UltraW40KBooksPageComponent implements OnInit {
  UltraW40KBooks: UltraW40KBook[] = []
  constructor(private UltraW40KBooksService: UltraW40KBooksService ) {}


  ngOnInit(){
    this.UltraW40KBooksService.getUltraW40KBooks().subscribe({
      next: (UltraW40KBooks: UltraW40KBook[]) => {
        this.UltraW40KBooks = UltraW40KBooks
      },
      error: () => {}
    })
  }

}
