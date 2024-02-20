import { Universe } from '../../interfaces/Universes.interface';
import { UniversesService } from '../../services/universes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universes-page',
  templateUrl: './universes-page.component.html',
  styleUrls: ['./universes-page.component.css']
})
export class UniversesPageComponent implements OnInit {
  universes: Universe[] = []
  constructor(private universesService: UniversesService ) {}


  ngOnInit(){
    this.universesService.getUniverses().subscribe({
      next: (universes: Universe[]) => {
        this.universes = universes
      },
      error: () => {}
    })
  }

}
