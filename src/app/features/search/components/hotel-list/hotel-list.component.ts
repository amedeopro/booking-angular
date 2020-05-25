import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from '../../../../../model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
      <div class="font-big">Hotel in {{text}}</div>

      <div class="horiz-grid separator" *ngFor="let hotel of hotels" (click)="setActive.emit(hotel)" [ngClass]="{active: hotel?.id === activeHotel?.id}">
          <div>{{hotel.name}}</div>
          <div>{{hotel.rooms[0].price}}</div>
      </div>

      <div class="separator"></div>
      <div class="horiz-grid">
          <div></div>
          <em>{{hotels?.length}} results</em>
      </div>
  `,
  styles: []
})
export class HotelListComponent  {
  @Input() hotels: Hotel[];
  @Input() activeHotel: Hotel;
  @Input() text: string;
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>();
}
