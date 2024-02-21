

import { OldManWarCountrie } from '../../interfaces/OldManWarCountries.interface';
import { Component, OnInit } from '@angular/core';
import { oldManWarCountriesService } from '../../services/oldManWarCountries.service';

@Component({
  selector: 'app-oldManWarCountries-page',
  templateUrl: './oldManWarCountries-page.component.html',
  styleUrls: ['./oldManWarCountries-page.component.css']
})
export class oldManWarCountriesPageComponent implements OnInit {
  oldManWarCountries: OldManWarCountrie[] = []
  constructor(private oldManWarCountriesService: oldManWarCountriesService ) {}


  ngOnInit(){
    this.oldManWarCountriesService.getOldManWarCountries().subscribe({
      next: (oldManWarCountries: OldManWarCountrie[]) => {
        this.oldManWarCountries = oldManWarCountries
      },
      error: () => {}
    })
  }

}
