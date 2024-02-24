import { HonorverseBook } from '../../interfaces/HonorverseBooks.interface';
import { honorverseBooksService } from '../../services/honorverseBooks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honorverseBooks-page',
  templateUrl: './honorverseBooks-page.component.html',
  styleUrls: ['./honorverseBooks-page.component.scss']
})
export class honorverseBooksPageComponent implements OnInit {
  honorverseBooks: HonorverseBook[] = []
  constructor(private honorverseBooksService: honorverseBooksService ) {}


  ngOnInit(){
    this.honorverseBooksService.getHonorverseBooks().subscribe({
      next: (honorverseBooks: HonorverseBook[]) => {
        this.honorverseBooks = honorverseBooks
      },
      error: () => {}
    })
  }

}
