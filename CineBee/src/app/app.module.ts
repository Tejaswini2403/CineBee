import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';   
import { SliderModule } from 'angular-image-slider';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot(),
    SliderModule,
    RouterModule.forRoot([
      { path:'', component:HomepageBodyComponent },
      { path:'ratings', component:RatingsComponent },
      { path:'reviews', component:ReviewsComponent },
      { path:'wishlist', component:WishlistComponent },
      { path:'profile', component:ProfileComponent },
      { path:'feedback', component:FeedbackComponent },
      { path:'**', component:PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}