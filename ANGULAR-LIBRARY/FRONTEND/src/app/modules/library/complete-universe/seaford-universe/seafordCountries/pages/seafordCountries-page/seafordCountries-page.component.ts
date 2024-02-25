
import { SeafordCountrie } from '../../interfaces/SeafordCountries.interface';
import { seafordCountriesService } from '../../services/seafordCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seafordCountries-page',
  templateUrl: './seafordCountries-page.component.html',
  styleUrls: ['./seafordCountries-page.component.scss']
})
export class seafordCountriesPageComponent implements OnInit {
  seafordCountries: SeafordCountrie[] = []
  constructor(private seafordCountriesService: seafordCountriesService ) {}


  ngOnInit(){
    this.seafordCountriesService.getSeafordCountries().subscribe({
      next: (seafordCountries: SeafordCountrie[]) => {
        this.seafordCountries = seafordCountries
      },
      error: () => {}
    })
  }

}
