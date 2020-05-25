import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel, Room} from '../../../../../model/hotel';

@Component({
  selector: 'app-reservations',
  template: `
      <div class="horiz-grid separator" *ngFor="let room of activeHotel?.rooms">
          <div>{{room.label}}</div>
          <div>
              {{room.price}}
              <i class="ion-ios-cart"  (click)="addToCart.emit(room)"></i>
          </div>
      </div>
  `,
  styles: []
})
export class ReservationsComponent {
  @Input() activeHotel: Hotel;
  @Output() addToCart: EventEmitter<Room> = new EventEmitter<Room>();

}
