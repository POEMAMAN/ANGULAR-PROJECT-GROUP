import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sagas',
  templateUrl: './sagas.component.html',
  styleUrls: ['./sagas.component.css']
})
export class SagasComponent {
@Input() saga: any
}
