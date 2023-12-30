import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { routing } from "./app.routing";
import { PropertyComponent } from './property/property.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PropertyComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, routing, FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
