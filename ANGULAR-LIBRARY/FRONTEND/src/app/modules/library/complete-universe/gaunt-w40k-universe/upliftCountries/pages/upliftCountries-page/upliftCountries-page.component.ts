
import { UpliftCountrie } from '../../interfaces/UpliftCountries.interface';
import { UpliftCountriesService } from '../../services/upliftCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upliftCountries-page',
  templateUrl: './upliftCountries-page.component.html',
  styleUrls: ['./upliftCountries-page.component.css']
})
export class UpliftCountriesPageComponent implements OnInit {
  upliftCountries: UpliftCountrie[] = []
  constructor(private upliftCountriesService: UpliftCountriesService ) {}


  ngOnInit(){
    this.upliftCountriesService.getUpliftCountries().subscribe({
      next: (upliftCountries: UpliftCountrie[]) => {
        this.upliftCountries = upliftCountries
      },
      error: () => {}
    })
  }

}
