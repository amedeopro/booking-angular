import {Injectable} from '@angular/core';
import {CartItem} from '../model/cart-item';
import {Hotel, Room} from '../model/hotel';

@Injectable({
  providedIn: 'root'
})

export class CartService {
 items: CartItem[] = [];

 add(room: Room, hotel: Hotel){
    this.items = [...this.items,
     {
       hotel: hotel,
       room: room,
       creationDate: Date.now()
     }]
 }

 removeFromCart(item) {
  this.items = this.items.filter(x => x.creationDate !== item.creationDate )
 }
}
