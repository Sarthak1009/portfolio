import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { BgBlurDirective } from './bg-blur.directive';
@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    PortfolioComponent,
    ContactSectionComponent,
    BgBlurDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
