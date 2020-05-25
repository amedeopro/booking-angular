import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../../../model/hotel';

@Component({
  selector: 'app-rates',
  template: `
      <div class="font-superbig">
          {{activeHotel?.rate}}
          <i class="ion-ios-person"></i>
      </div>
      <div>
          <i *ngFor="let star of 5 | intToArray; let i = index"
             class="icon" [ngClass]="{'ion-ios-star': i < activeHotel?.stars, 'ion-ios-star-outline': i >= activeHotel?.stars}"></i>
      </div>
  `,
  styles: []
})
export class RatesComponent {

  @Input() activeHotel: Hotel;

}
