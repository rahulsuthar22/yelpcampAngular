import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';
import { SearchPageNotComponent } from './Components/search-page-not/search-page-not.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCampComponent } from './Components/new-camp/new-camp.component';
import { IndividualCampComponent } from './Components/individual-camp/individual-camp.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    SearchPageNotComponent,
    PageNotFoundComponent,
    NewCampComponent,
    IndividualCampComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
