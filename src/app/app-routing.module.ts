import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LearnerComponent } from './learner/learner.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

import { LearnComponent } from './learn/learn.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path: 'home',component: HomeComponent},
  { path: 'profile', component: LandingComponent },
  { path: 'test', component: TestComponent },
  { path: 'home' , component: AppComponent},
  {path: 'learner', component: LearnerComponent},
  {path: 'profilepage',component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
