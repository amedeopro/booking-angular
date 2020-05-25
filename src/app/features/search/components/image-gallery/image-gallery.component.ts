import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from '../../../../../model/hotel';

@Component({
  selector: 'app-image-gallery',
  template: `
      <img src="{{activeImage}}" width="100%" height="150">
      <div class="nested">
          <div *ngFor="let image of activeHotel?.images">
              <img [src]="image" width="100%" (click)="setActiveImgae.emit(image)">
          </div>
      </div>
  `,
  styles: []
})
export class ImageGalleryComponent {
  @Input() activeImage;
  @Input() activeHotel: Hotel;
  @Output() setActiveImgae: EventEmitter<string> = new EventEmitter<string>();

}
