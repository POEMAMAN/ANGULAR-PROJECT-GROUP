
import { GauntW40KCountrie } from '../../interfaces/GauntW40KCountries.interface';
import { gauntW40KCountriesService } from '../../services/gauntW40KCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauntW40KCountries-page',
  templateUrl: './gauntW40KCountries-page.component.html',
  styleUrls: ['./gauntW40KCountries-page.component.scss']
})
export class gauntW40KCountriesPageComponent implements OnInit {
  gauntW40KCountries: GauntW40KCountrie[] = []
  constructor(private gauntW40KCountriesService: gauntW40KCountriesService ) {}


  ngOnInit(){
    this.gauntW40KCountriesService.getGauntW40KCountries().subscribe({
      next: (gauntW40KCountries: GauntW40KCountrie[]) => {
        this.gauntW40KCountries = gauntW40KCountries
      },
      error: () => {}
    })
  }

}
