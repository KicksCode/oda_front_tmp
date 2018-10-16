import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { PochaHouseComponent } from './pocha-house/pocha-house.component';
import { CommunityComponent } from './community/community.component';
import { AlliesComponent } from './allies/allies.component';
import { NewsComponent } from './news/news.component';
import { DonateComponent } from './donate/donate.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    PochaHouseComponent,
    CommunityComponent,
    AlliesComponent,
    NewsComponent,
    DonateComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
