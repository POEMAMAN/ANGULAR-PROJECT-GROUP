
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BooksComponent } from './books/books.component';
import { UniverseComponent } from './universe/universe.component';
import { verifyTokenGuard } from '../auth/guards/verify-token.guard';
import { LibraryComponent } from './library.component';



const routes: Routes = [
  {
      path: '', children: [
    {
      path: 'library', component: LibraryComponent
    },
    // {
    //   path: 'books', component: BooksComponent
    // },
    {
      path: 'authors', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/authors/authors.module').then(m => m.AuthorsModule)
    },
    {
      path: 'awards', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/awards/awards.module').then(m => m.AwardsModule)
    },
    {
      path: 'universe', component: UniverseComponent
    },
    {
      path: 'completeUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./complete-universe/complete-universe.module').then(m => m.CompleteUniverseModule)
    },
    {
      path: '**', redirectTo: 'library', pathMatch: 'full'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
