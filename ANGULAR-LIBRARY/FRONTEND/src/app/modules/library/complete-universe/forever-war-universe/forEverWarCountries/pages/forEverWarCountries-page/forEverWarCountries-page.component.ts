
import { ForEverWarCountrie } from '../../interfaces/ForEverWarCountries.interface';
import { forEverWarCountriesService } from '../../services/forEverWarCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forEverWarCountries-page',
  templateUrl: './forEverWarCountries-page.component.html',
  styleUrls: ['./forEverWarCountries-page.component.scss']
})
export class forEverWarCountriesPageComponent implements OnInit {
  forEverWarCountries: ForEverWarCountrie[] = []
  constructor(private forEverWarCountriesService: forEverWarCountriesService ) {}


  ngOnInit(){
    this.forEverWarCountriesService.getForEverWarCountries().subscribe({
      next: (forEverWarCountries: ForEverWarCountrie[]) => {
        this.forEverWarCountries = forEverWarCountries
      },
      error: () => {}
    })
  }

}
