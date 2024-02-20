
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BooksComponent } from './books/books.component';
import { UniverseComponent } from './universe/universe.component';
import { verifyTokenGuard } from '../auth/guards/verify-token.guard';
import { LibraryComponent } from './library.component';
import { AuthorspageComponent } from './authors/page/authors-page/authors-page.component';


const routes: Routes = [
  {
      path: '', children: [
    {
      path: 'library', component: LibraryComponent
    },
    {
      path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../library/books/books.module').then(m => m.BooksModule)
    },
    {
      path: 'authors', component: AuthorspageComponent
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
