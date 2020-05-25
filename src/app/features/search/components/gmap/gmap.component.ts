import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../../../model/hotel';

@Component({
  selector: 'app-gmap',
  template: `
      <img src="https://maps.googleapis.com/maps/api/staticmap?center={{activeHotel?.location.address}}&zoom=15&size=500x200&key=AIzaSyAHOR6QeO0NO4ZS7DyP1O0SwUjmzqGVi_A"
           width="100%" height="200">
      <div class="address">
          <div class="font-big">{{activeHotel?.name}}</div>
          <div class="font-small">{{activeHotel?.location.address}}</div>
      </div>
  `,
  styles: []
})
export class GmapComponent  {

    @Input() activeHotel: Hotel;

}
