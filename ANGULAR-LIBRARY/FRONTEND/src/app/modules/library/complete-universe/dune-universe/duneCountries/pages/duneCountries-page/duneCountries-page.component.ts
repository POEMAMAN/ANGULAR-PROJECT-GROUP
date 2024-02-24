
import { DuneCountrie } from '../../interfaces/DuneCountries.interface';
import { duneCountriesService } from '../../services/duneCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duneCountries-page',
  templateUrl: './duneCountries-page.component.html',
  styleUrls: ['./duneCountries-page.component.scss']
})
export class duneCountriesPageComponent implements OnInit {
  duneCountries: DuneCountrie[] = []
  constructor(private duneCountriesService: duneCountriesService ) {}


  ngOnInit(){
    this.duneCountriesService.getDuneCountries().subscribe({
      next: (duneCountries: DuneCountrie[]) => {
        this.duneCountries = duneCountries
      },
      error: () => {}
    })
  }

}
