import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';   
import { SliderModule } from 'angular-image-slider';
import { RouterModule } from '@angular/router';
import { IgxIconModule } from 'igniteui-angular';
import { HttpClientModule } from '@angular/common/http';
import { SlideshowModule } from 'ng-simple-slideshow';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PosterComponent } from './poster/poster.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PosterComponent,
    HomePageComponent,
    RatingsComponent,
    ReviewsComponent,
    WishlistComponent,
    ProfileComponent,
    FeedbackComponent,
    HomepageBodyComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    FirstPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot(),
    SliderModule,
    IgxIconModule,
    HttpClientModule,
    SlideshowModule,
    RouterModule.forRoot([
      { path:'', component:FirstPageComponent },
      { path:'homepage' ,component:HomePageComponent},
      { path:'homepagebody', component:HomepageBodyComponent },
      { path:'ratings', component:RatingsComponent },
      { path:'reviews', component:ReviewsComponent },
      { path:'wishlist', component:WishlistComponent },
      { path:'profile', component:ProfileComponent },
      { path:'feedback', component:FeedbackComponent },
      { path: 'poster', component:PosterComponent},
      { path:'login', component:LoginComponent },
      { path:'registration', component:RegistrationComponent },
      { path:'**', component:PageNotFoundComponent }
    ])
  ],
  exports: [
    
    MatButtonModule,
    MatInputModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}