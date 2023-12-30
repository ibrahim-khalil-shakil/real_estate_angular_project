import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './property/property.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "about", component: AboutComponent },
{ path: "property", component: PropertyComponent },
{ path: "testimonial", component: TestimonialComponent },
{ path: "contact", component: ContactComponent },
{ path: "", component: HomeComponent }]
export const routing = RouterModule.forRoot(routes); 