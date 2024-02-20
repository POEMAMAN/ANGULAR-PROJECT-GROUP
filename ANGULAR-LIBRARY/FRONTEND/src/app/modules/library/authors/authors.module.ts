import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsPageComponent } from './pages/authors-page/authors-page.component';
import { AuthorsComponent } from './components/authors/authors.component';





@NgModule({
  declarations: [
    AuthorsPageComponent,
    AuthorsComponent,


  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,



  ]
})
export class AuthorsModule { }
