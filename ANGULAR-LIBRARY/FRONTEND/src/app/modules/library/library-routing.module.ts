
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from '../auth/guards/verify-token.guard';
import { LibraryComponent } from './library.component';
import { FreeBooksComponent } from './free-books/free-books.component';





const routes: Routes = [
  {
      path: '', children: [
    {
      path: '', canActivate: [verifyTokenGuard], component: LibraryComponent
    },
    {
      path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/books/books.module').then(m => m.BooksModule)
    },
    {
      path: 'authors', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/authors/authors.module').then(m => m.AuthorsModule)
    },
    {
      path: 'awards', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/awards/awards.module').then(m => m.AwardsModule)
    },
    {
      path: 'universes', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/universes/universes.module').then(m => m.UniversesModule)
    },
    {
      path: 'sagas', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/sagas/sagas.module').then(m => m.SagasModule)
    },
    {
      path: 'completeUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./complete-universe/complete-universe.module').then(m => m.CompleteUniverseModule)
    },
    {
      path: 'freeEbooks', canActivate: [verifyTokenGuard], component: FreeBooksComponent
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
