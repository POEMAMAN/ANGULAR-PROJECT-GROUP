
import { HonorverseCountrie } from '../../interfaces/HonorverseCountries.interface';
import { honorverseCountriesService } from '../../services/honorverseCountries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honorverseCountries-page',
  templateUrl: './honorverseCountries-page.component.html',
  styleUrls: ['./honorverseCountries-page.component.css']
})
export class honorverseCountriesPageComponent implements OnInit {
  honorverseCountries: HonorverseCountrie[] = []
  constructor(private honorverseCountriesService: honorverseCountriesService ) {}


  ngOnInit(){
    this.honorverseCountriesService.getHonorverseCountries().subscribe({
      next: (honorverseCountries: HonorverseCountrie[]) => {
        this.honorverseCountries = honorverseCountries
      },
      error: () => {}
    })
  }

}
