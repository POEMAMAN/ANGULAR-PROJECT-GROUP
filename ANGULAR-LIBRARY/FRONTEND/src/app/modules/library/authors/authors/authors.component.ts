import { Component, Input } from '@angular/core';
import { Author } from '../authors-interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  @Input() authorsList: Author[] = [];
}
