import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../../../model/hotel';
import {CartService} from '../../../services/cart.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  text = 'Rome';
  hotels: Hotel[] = [];
  activeHotel: Hotel;
  activeImage: string;
  constructor(private http: HttpClient, public cart: CartService, private router: Router) {
    this.search(this.text);
  }

  search(text: string) {
    this.text = text
    this.http.get<Hotel[]>(`http://localhost:3000/hotels?q=` + text)
      .subscribe(res => {
        if(!res.length){
          this.router.navigateByUrl('search/no-results');
            return;
        }
        console.log(res);
        this.hotels = res
        this.setActive(this.hotels[0])
      })
  }

  setActive(hotel: Hotel){
    this.activeHotel = hotel;
    this.activeImage = hotel.images[0];
  }
  setActiveImgae(image: string){
    this.activeImage = image
  }

  inviaMail({mail, msg}){
    console.log(mail,msg, this.activeHotel.email);
  }

  addToCart(room, hotel) {
    this.cart.add(room,hotel);
  }
}
