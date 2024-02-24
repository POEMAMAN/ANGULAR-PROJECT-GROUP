
import { FundacionCountrie } from '../../interfaces/FundacionCountries.interface';
import { fundacionCountriesService } from '../../services/fundacionCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundacionCountries-page',
  templateUrl: './fundacionCountries-page.component.html',
  styleUrls: ['./fundacionCountries-page.component.css']
})
export class fundacionCountriesPageComponent implements OnInit {
  fundacionCountries: FundacionCountrie[] = []
  constructor(private fundacionCountriesService: fundacionCountriesService ) {}


  ngOnInit(){
    this.fundacionCountriesService.getFundacionCountries().subscribe({
      next: (fundacionCountries: FundacionCountrie[]) => {
        this.fundacionCountries = fundacionCountries
      },
      error: () => {}
    })
  }

}
