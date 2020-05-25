import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IntToArrayPipe } from './shared/int-to-array.pipe';
import { HotelListComponent } from './features/search/components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './features/search/components/hotel-form/hotel-form.component';
import { SeparatorComponent } from './shared/components/separator/separator.component';
import { GmapComponent } from './features/search/components/gmap/gmap.component';
import { ContactFormComponent } from './features/search/components/contact-form/contact-form.component';
import { RatesComponent } from './features/search/components/rates/rates.component';
import { ReservationsComponent } from './features/search/components/reservations/reservations.component';
import { ServicesComponent } from './features/search/components/services/services.component';
import { ImageGalleryComponent } from './features/search/components/image-gallery/image-gallery.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    CartComponent,
    IntToArrayPipe,
    HotelListComponent,
    HotelFormComponent,
    SeparatorComponent,
    GmapComponent,
    ContactFormComponent,
    RatesComponent,
    ReservationsComponent,
    ServicesComponent,
    ImageGalleryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
