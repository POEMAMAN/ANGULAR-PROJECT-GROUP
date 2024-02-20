import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AssignTokenInterceptor } from './modules/auth/interceptors/assign-token.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderUniverseComponent } from './components/header-universe/header-universe.component';
import { HeaderLogoutComponent } from './components/header-logout/header-logout.component';
import { MainComponent } from './components/main/main.component';
import { LibraryComponent } from './modules/library/library.component';
import { HeaderReturnLibraryComponent } from './components/header-return-library/header-return-library.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderUniverseComponent,
    HeaderLogoutComponent,
    HeaderReturnLibraryComponent,
    MainComponent,
    LibraryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AssignTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
