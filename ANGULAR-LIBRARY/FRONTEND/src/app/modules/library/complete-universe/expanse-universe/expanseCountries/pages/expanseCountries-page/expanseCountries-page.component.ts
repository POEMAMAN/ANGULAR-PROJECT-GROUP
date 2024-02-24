
import { ExpanseCountrie } from '../../interfaces/ExpanseCountries.interface';
import { expanseCountriesService } from '../../services/expanseCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanseCountries-page',
  templateUrl: './expanseCountries-page.component.html',
  styleUrls: ['./expanseCountries-page.component.scss']
})
export class expanseCountriesPageComponent implements OnInit {
  expanseCountries: ExpanseCountrie[] = []
  constructor(private expanseCountriesService: expanseCountriesService ) {}


  ngOnInit(){
    this.expanseCountriesService.getExpanseCountries().subscribe({
      next: (expanseCountries: ExpanseCountrie[]) => {
        this.expanseCountries = expanseCountries
      },
      error: () => {}
    })
  }

}
