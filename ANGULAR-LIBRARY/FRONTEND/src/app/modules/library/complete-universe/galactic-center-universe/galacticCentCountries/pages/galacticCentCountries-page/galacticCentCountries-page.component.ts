
import { GalacticCentCountrie } from '../../interfaces/GalacticCentCountries.interface';
import { galacticCentCountriesService } from '../../services/galacticCentCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galacticCentCountries-page',
  templateUrl: './galacticCentCountries-page.component.html',
  styleUrls: ['./galacticCentCountries-page.component.scss']
})
export class galacticCentCountriesPageComponent implements OnInit {
  galacticCentCountries: GalacticCentCountrie[] = []
  constructor(private galacticCentCountriesService: galacticCentCountriesService ) {}


  ngOnInit(){
    this.galacticCentCountriesService.getGalacticCentCountries().subscribe({
      next: (galacticCentCountries: GalacticCentCountrie[]) => {
        this.galacticCentCountries = galacticCentCountries
      },
      error: () => {}
    })
  }

}
