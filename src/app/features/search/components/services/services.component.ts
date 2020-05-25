import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../../../model/hotel';

@Component({
  selector: 'app-services',
  template: `
      <div class="title">Services</div>
      <div class="nested">
          <div *ngFor="let service of activeHotel?.services"><i [class]="'icon ion-ios-' + service"  [title]="service"></i></div>
      </div>
  `,
  styles: []
})
export class ServicesComponent  {
@Input() activeHotel: Hotel;

}
