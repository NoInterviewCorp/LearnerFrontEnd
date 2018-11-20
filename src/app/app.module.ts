import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LearnerComponent } from './learner/learner.component';
import { SearchComponent } from './learner/search/search.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularModule } from './angular/angular.module';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { TabsComponent } from './landing/tabs/tabs.component';
import { ScrollingContainerComponent } from './scrolling-container/scrolling-container.component';

import { LearnComponent } from './learn/learn.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './learner/card/card.component';

import { SubscribecardComponent } from './scrolling-container/subscribecard/subscribecard.component';
import { YoursubscriptionscardComponent } from './scrolling-container/yoursubscriptionscard/yoursubscriptionscard.component';
import { YourcontributionscardComponent } from './scrolling-container/yourcontributionscard/yourcontributionscard.component';
// import { ResultComponent } from './result/result.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("350286072374588")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("454238831817-sristf7mn9g39ckeemne85df5rm1lg3b.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    TabsComponent,
    ScrollingContainerComponent,
    
    LearnComponent,
  
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
    LearnerComponent,
    SearchComponent,
    TestComponent,
    
    SubscribecardComponent,
    YoursubscriptionscardComponent,
    YourcontributionscardComponent,
    // ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgMatSearchBarModule,
    FlexLayoutModule,
    NgMatSearchBarModule,
    HttpClientModule
  ],
  entryComponents:[
    SignInComponent
  ],
  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
