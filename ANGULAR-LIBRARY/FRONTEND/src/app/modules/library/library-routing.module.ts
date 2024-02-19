import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryPageComponent } from './pages/library-page/library-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: 'list', component: LibraryPageComponent
      },
      {
        path: 'books', component: LibraryPageComponent
      },
      {
        path: 'authors', component: LibraryPageComponent
      },
      {
        path: 'universe', component: LibraryPageComponent
      },
      {
      path: 'awards', component: LibraryPageComponent
      },
      {
        path: '**', redirectTo: 'list', pathMatch: 'full'
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }