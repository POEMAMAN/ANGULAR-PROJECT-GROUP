import { Award } from '../../interfaces/Awards.interface';
import { AwardsService } from '../../services/awards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards-page',
  templateUrl: './awards-page.component.html',
  styleUrls: ['./awards-page.component.css']
})
export class AwardsPageComponent implements OnInit {
  awards: Award[] = []
  constructor(private awardsService: AwardsService ) {}


  ngOnInit(){
    this.awardsService.getAwards().subscribe({
      next: (awards: Award[]) => {
        this.awards = awards
      },
      error: () => {}
    })
  }

}
