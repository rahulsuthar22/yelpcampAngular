import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualCampComponent } from './Components/individual-camp/individual-camp.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { NewCampComponent } from './Components/new-camp/new-camp.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SearchPageNotComponent } from './Components/search-page-not/search-page-not.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  // redirect to
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'search-page-not', component: SearchPageNotComponent },
  { path: 'new-camp', component: NewCampComponent },
  { path: 'individual-camp', component: IndividualCampComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
