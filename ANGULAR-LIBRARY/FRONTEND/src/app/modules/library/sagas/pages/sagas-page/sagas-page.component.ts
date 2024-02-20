import { Saga } from '../../interfaces/Sagas.interface';
import { SagasService } from '../../services/sagas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sagas-page',
  templateUrl: './sagas-page.component.html',
  styleUrls: ['./sagas-page.component.css']
})
export class SagasPageComponent implements OnInit {
  sagas: Saga[] = []
  constructor(private sagasService: SagasService ) {}


  ngOnInit(){
    this.sagasService.getSagas().subscribe({
      next: (sagas: Saga[]) => {
        this.sagas = sagas
        console.log(sagas)
      },
      error: () => {}
    })
  }

}
