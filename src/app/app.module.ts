import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { Whatdewho2Component } from './whatdewho2/whatdewho2.component';
import { STUDIESComponent } from './studies/studies.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import { PricingComponent } from './pricing/pricing.component';
import { WhoareweoneComponent } from './whoareweone/whoareweone.component';
import { WhoarewetowComponent } from './whoarewetow/whoarewetow.component';
import { AppRoutingModule } from './app-routing.module';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhatwedoComponent,
    Whatdewho2Component,
    STUDIESComponent,
    WhoareweComponent,
    PricingComponent,
    WhoareweoneComponent,
    WhoarewetowComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
