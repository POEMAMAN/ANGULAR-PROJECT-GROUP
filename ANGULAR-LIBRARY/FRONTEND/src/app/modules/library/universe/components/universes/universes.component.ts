import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-universes',
  templateUrl: './universes.component.html',
  styleUrls: ['./universes.component.css']
})
export class UniversesComponent {
@Input() universe: any
}
