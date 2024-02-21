import { UltraW40KCountriesService } from './../../services/UltraW40KCountries.service';
import { UltraW40KCountrie } from '../../interfaces/UltraW40KCountries.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-UltraW40KCountries-page',
  templateUrl: './UltraW40KCountries-page.component.html',
  styleUrls: ['./UltraW40KCountries-page.component.css']
})
export class UltraW40KCountriesPageComponent implements OnInit {
  UltraW40KCountries: UltraW40KCountrie[] = []
  constructor(private UltraW40KCountriesService: UltraW40KCountriesService ) {}


  ngOnInit(){
    this.UltraW40KCountriesService.getUltraW40KCountries().subscribe({
      next: (UltraW40KCountries: UltraW40KCountrie[]) => {
        this.UltraW40KCountries = UltraW40KCountries
      },
      error: () => {}
    })
  }

}
